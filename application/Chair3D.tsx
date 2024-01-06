import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber/native";
import Chair from "../components/Chair3D";
import Trigger from "../components/Trigger";
import useControls from "r3f-native-orbitcontrols";
import Loader from "../components/Loader";

type Props = {};

const Chair3D = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [OrbitControls, events] = useControls();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated barStyle={"default"} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Grey Chair</Text>
            <Text style={styles.textPrice}>$80.00</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Text>
          </View>
          <View>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.text}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.modelContainer} {...events}>
        {loading && <Loader />}
        <Canvas>
          <OrbitControls  enablePan={false}/>
          <directionalLight position={[1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[0, 1, 0]} args={["white", 5]} />
          <directionalLight position={[0, -1, 0]} args={["white", 5]} />
          <directionalLight position={[0, 0, 1]} args={["white", 5]} />
          <directionalLight position={[0, 0, -1]} args={["white", 5]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Chair />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Grey Chair</Text>
          <Text style={styles.textPrice}>$80.00</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chair3D;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    fontSize: 28,
    color: "#051E47",
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: 28,
    color: "#3F6900",
    fontWeight: "bold",
  },
  text: {
    color: "black",
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3F6900",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
