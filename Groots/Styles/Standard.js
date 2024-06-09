import { StyleSheet } from "react-native";

export const standard = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    borderWidth: 2,
    borderColor: "grey",
    paddingVertical: "1%",
    paddingHorizontal: "2%",
    marginVertical: "1%",
  },
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: "1%",
    marginVertical: "1%",
  },
  text: {
    color: "white",
  },
});
