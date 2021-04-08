import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import MiniCard from "../components/MiniCard";

import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../redux/YTdata/YTdataActions";
import { AddData } from "../redux/YTdata/YTdataType";

//!----------------
//* */  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyC6ATg85R3YO7MeZEupN4r6KK6dg86t1X0

// HTTP/1.1

//!----------------

const Search = () => {
  const [value, setValue] = useState("");
  // const [miniCardData, SetminiCardData] = useState([]);
  const [loading, SetLoading] = useState(false);

  const { colors } = useTheme();
  const textColor = colors.iconColor;

  const navigation = useNavigation();

  const miniCardData = useSelector((state) => state.YTdata.YTdata);
  const dispatch = useDispatch();

  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  });

  const fetchData = () => {
    SetLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyC6ATg85R3YO7MeZEupN4r6KK6dg86t1X0`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.items);
        // console.log(data.items.id.videoId);
        SetLoading(false);
        // SetminiCardData(data.items);
        // dispatch(addData);
        dispatch({ type: AddData, payload: data.items });
      });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, { backgroundColor: colors.headerColor }]}>
        <Ionicons
          style={{ color: textColor === "black" ? "#212121" : textColor }}
          name="md-arrow-back"
          size={32}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextInput
          autoFocus={true}
          ref={textInput}
          style={styles.searchBar__TextInput}
          onChangeText={(text) => setValue(text)}
          value={value}
          onSubmitEditing={() => fetchData()}
        />
        <Ionicons
          style={{ color: textColor === "black" ? "#212121" : textColor }}
          name="md-send"
          size={32}
          onPress={() => fetchData()}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="red"
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => (
          <MiniCard
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
          />
        )}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  searchBar: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 5,
  },

  searchBar__TextInput: {
    flex: 1.5,
    backgroundColor: "#e6e6e6",
    marginHorizontal: 7,
  },
});
