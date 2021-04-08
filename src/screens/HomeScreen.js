import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";

import { useSelector } from "react-redux";

const HomeScreen = () => {
  const cardData = useSelector((state) => {
    // console.log(state);
    return state.YTdata.YTdata;
  });

  return (
    <View style={styles.container}>
      <Header />
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
