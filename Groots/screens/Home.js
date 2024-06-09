import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as Styles from "../Styles/Standard";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";

const Home = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  console.log(auth.currentUser);

  const logout = async () => {
    setLoading(true);
    try {
      const response = await signOut(auth);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={Styles.standard.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={[Styles.standard.button, { backgroundColor: "red" }]}
        onPress={logout}
      >
        <Text style={Styles.standard.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
