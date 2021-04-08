import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation, useTheme } from "@react-navigation/native";

const Card = ({ videoId, title, channel }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("video", { videoId, title })}
    >
      <View style={styles.card}>
        <View style={styles.card__body}>
          <View style={styles.card__top}>
            <Image
              source={{
                uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              }}
              style={styles.img}
            />
          </View>
          <View style={styles.card__bottom}>
            <View>
              <MaterialIcons
                name="account-circle"
                style={styles.icon}
                size={40}
                color={textColor === "black" ? "#212121" : textColor}
              />
            </View>
            <View style={styles.card__bottom_text}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={2}
                style={[styles.card__bottom_text_title, { color: textColor }]}
              >
                {title}
              </Text>
              <Text
                style={[
                  styles.card__bottom_text_subTitle,
                  { color: textColor },
                ]}
              >
                {channel}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
  },
  card__body: {},
  img: {
    width: "100%",
    height: 200,
  },
  card__bottom: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  card__bottom_text: {
    marginLeft: 10,
  },
  card__bottom_text_title: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
  },
});
