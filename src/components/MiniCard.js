import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useTheme } from "@react-navigation/native";

const MiniCard = ({ videoId, title, channel }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("video", { videoId, title })}
    >
      <View style={styles.container}>
        <View style={styles.miniCard}>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
            }}
            style={styles.img}
          />
          <View style={styles.miniCard__content}>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={[styles.miniCard__content_title, { color: textColor }]}
            >
              {title}
            </Text>
            <Text
              style={[styles.miniCard__content_subTitle, { color: textColor }]}
            >
              {channel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 0,
  },
  img: {
    width: "45%",
    height: 100,
  },
  miniCard: {
    flexDirection: "row",
  },
  miniCard__content: {
    paddingLeft: 7,
  },
  miniCard__content_title: {
    fontSize: 17,
    width: Dimensions.get("screen").width / 2,
  },
  miniCard__content_subTitle: {
    fontSize: 12,
  },
});
