import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";

import { useTheme } from "@react-navigation/native";

import { useSelector } from "react-redux";

const LittleCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: 180,
        height: 50,
        borderRadius: 4,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          marginTop: 5,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector((state) => {
    // console.log(state);
    return state.YTdata.YTdata;
  });

  const { colors } = useTheme();
  const textColor = colors.iconColor;

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <LittleCard name="Gaming" />
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="Movies" />
          <LittleCard name="Fasion" />
          <LittleCard name="News" />
        </View>
        <Text
          style={{
            margin: 8,
            fontSize: 22,
            borderBottomWidth: 1,
            borderBottomColor: textColor,
            color: textColor,
          }}
        >
          Trending Videos
        </Text>
        <FlatList
          data={cardData}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
