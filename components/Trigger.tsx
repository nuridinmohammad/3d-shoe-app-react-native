import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Trigger = ({ setLoading }: Props) => {
  useEffect(() => {
    setLoading(true);
    console.log("Loading..");

    return () => {
      console.log("Finish..");
      setLoading(false);
    };
  }, [setLoading]);
  return <></>;
};

export default Trigger;

const styles = StyleSheet.create({});
