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
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import * as Styles from "../../Styles/Standard";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert("Login failed");
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
    </KeyboardAvoidingView>
  );
};

export default Login;
