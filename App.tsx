import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Shoe3D from "./application/Shoe3D";
import Chair3D from "./application/Chair3D";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      {/* <Shoe3D /> */}
      <Chair3D/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
