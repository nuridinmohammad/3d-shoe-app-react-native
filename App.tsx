import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Shoe3D from "./application/Shoe3D";
import Chair3D from "./application/Chair3D";
import CarouselWIthPagination from "./application/CarouselWIthPagination";

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={"transparent"} animated/>
      {/* <Shoe3D /> */}
      {/* <Chair3D/> */}
      <CarouselWIthPagination />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1014',
  },
});
