import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  list: { paddingHorizontal: 20 },

  card: {
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginRight: 20,
    overflow: "hidden",
    elevation: 5,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  image: { width: "100%", height: 200, resizeMode: "cover" },

  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },

  timeTag: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  timeText: { color: "white", fontSize: 13, marginLeft: 6, fontWeight: "600" },

  discountTag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },

  discountText: { color: "white", fontSize: 13, fontWeight: "bold" },

  textContainer: { paddingHorizontal: 15, paddingTop: 10 },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 22, fontWeight: "bold", color: "#222" },

  caption: { fontSize: 14, color: "#666", marginVertical: 2 },

  restaurant: { fontSize: 16, fontWeight: "bold", color: "#444" },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: { fontSize: 16, fontWeight: "bold", marginLeft: 6, color: "#444" },

  priceTag: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "green",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  priceText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
