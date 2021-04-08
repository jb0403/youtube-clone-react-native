import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

import { useNavigation, useTheme } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { change_theme } from "../redux";

const Header = () => {
  const navigation = useNavigation();

  const { colors, iconColor } = useTheme();

  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => {
    return state.Theme.state;
  });

  const secondary_clr = colors.iconColor;

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: colors.headerColor,
        },
      ]}
    >
      <View style={styles.header__left}>
        <AntDesign name="youtube" size={32} color="red" />
        <Text style={[styles.header__left_text, { color: secondary_clr }]}>
          YouTube
        </Text>
      </View>
      <View style={styles.header__right}>
        <View style={styles.header__right_icons}>
          <Ionicons
            name="md-videocam"
            style={styles.header__right_icon}
            size={32}
            color={secondary_clr}
          />
          <Ionicons
            name="md-search"
            style={styles.header__right_icon}
            size={30}
            color={secondary_clr}
            onPress={() => {
              navigation.navigate("search");
            }}
          />
          <MaterialIcons
            name="account-circle"
            style={styles.header__right_icon}
            size={32}
            color={secondary_clr}
            onPress={() => dispatch(change_theme(!currentTheme))}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Constant.statusBarHeight,
    padding: 10,
    elevation: 4,
    marginBottom: 3,
    //for IOS
    // shadowOffset: { width: 10, height: 10 },
    // shadowColor: "black",
    // shadowOpacity: 1.0,
  },
  header__left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  header__left_text: {
    marginLeft: 10,
    fontSize: 21,
    fontWeight: "bold",
  },
  header__right: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 10,
  },

  header__right_icons: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    justifyContent: "space-around",
  },
});
