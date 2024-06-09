import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../../config/Firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import * as Styles from "../../Styles/Standard";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation.navigate("Login/InsideTabs");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={Styles.standard.container} behavior="padding">
      <TextInput
        placeholder="Email..."
        value={email}
        autoCapitalize="none"
        onChangeText={(e) => setEmail(e)}
        style={Styles.standard.textInput}
      />
      <TextInput
        placeholder="Password..."
        value={password}
        autoCapitalize="none"
        onChangeText={(p) => setPassword(p)}
        secureTextEntry
        style={Styles.standard.textInput}
      />
      <TouchableOpacity
        onPress={register}
        style={[Styles.standard.button, { backgroundColor: "blue" }]}
      >
        <Text style={Styles.standard.text}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[Styles.standard.button, { backgroundColor: "red" }]}
      >
        <Text style={Styles.standard.text}>Cancel</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Register;
