import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../config/Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import * as Styles from "../../Styles/Standard";

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

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
        onPress={login}
        style={[Styles.standard.button, { backgroundColor: "blue" }]}
      >
        <Text style={Styles.standard.text}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.standard.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "blue" }}>No account, register!</Text>
      </TouchableOpacity>
    </View>
  );
};
