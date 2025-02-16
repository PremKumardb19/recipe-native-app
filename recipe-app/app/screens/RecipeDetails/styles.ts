import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  recipeImage: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 18,
    color: "orangered",
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  restaurant: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "orangered",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  timeText: {
    color: "white",
    marginLeft: 5,
    fontSize: 14,
  },
  discountTag: {
    backgroundColor: "green",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  discountText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  showMore: {
    fontSize: 16,
    color: "orangered",
    textAlign: "center",
    fontWeight: "bold",
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  price: {
    fontSize: 26,
    fontWeight: "bold",
    color: "orangered",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterButton: {
    backgroundColor: "orangered",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  counterText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  count: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 15,
    color: "#333",
  },
});
