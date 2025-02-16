import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "#fff" },

  header: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "bold", flex: 1 },
  hr: { width: 40, height: 3, backgroundColor: "#ff6600", borderRadius: 2 },

  list: { flexDirection: "row", marginBottom: 10 },
  item: { alignItems: "center", marginRight: 15 },
  image: { width: width / 5, height: width / 5, borderRadius: 10 },
  text: { fontSize: 14, marginTop: 5, color: "#333" },
});

export default styles;
