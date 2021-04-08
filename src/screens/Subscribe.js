import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const Subscribe = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Subscribe screen</Text>
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
