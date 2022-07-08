import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  homePage: {
    alignItems: "center",
  },
  background: {
    position: "absolute",
    flex: 1,
    left: 0,
    top: 35,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  coverImage: {
    width: 350,
    height: 480,
    marginBottom: 15,
  },
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
    margin: 5,
  },
  title: {
    marginLeft: 40,
    width: 300,
    height: 50,
    marginTop: 40,
    marginBottom: 25,
  },
  header: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
    marginHorizontal: 25,
    marginBottom: 20,
    justifyContent: "center",
  },
  listItem: {
    padding: 30,
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 25,
  },

  listItemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cards: {
    marginBottom: 20,
    width: 250,
    height: 350,
    borderColor: "#000000",
  },
  footer: {
    marginTop: 25,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 5,
  },
  footerCredits: {
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 50,
  },
  footerText: {
    color: "#ffffff",
    marginRight: 10,
    fontStyle: "italic",
  },
  copyright: { color: "#ffffff", textAlign: "center", padding: 5 },
  disclaimer: {
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 10,
    color: "#ffffff",
  },
  disclaimerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
  },

  dropdown: { height: 30 },
});

export default styles;
