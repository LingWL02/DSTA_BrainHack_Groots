import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  //   const signInWithGoogle = async () => {
  //     try {
  //       await signInWithPopup(auth, googleProvider);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <View style={styles.standard}>
        <TextInput
          placeholder="Email..."
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.standard}
        />
      </View>
      <View style={styles.standard}>
        <TextInput
          placeholder="Password..."
          value={password}
          onChangeText={(p) => setPassword(p)}
          secureTextEntry
          style={styles.standard}
        />
      </View>
      <View style={styles.standard}>
        <Button title="Sign In" onPress={signIn} />
      </View>
      {/* <View style={styles.standard}>
        <Button title="Sign In With Google" onPress={signInWithGoogle} />
      </View> */}
      <View style={styles.standard}>
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  standard: {
    justifyContent: "center",
    marginTop: 10,
  },
});
