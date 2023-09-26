import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    marginTop: 30,
  },
  textInput: {
    height: 60,
    width: width - 60,
    borderRadius: 10,
    borderColor: "#6B3DB6",
    borderWidth: 0.5,
    backgroundColor: "white",
    marginVertical: 10,
    paddingLeft: 20,
  },
  squareBtn: {
    height: 55,
    width: 260,
    marginTop: 60,
    backgroundColor: "#5212A1",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 20,
  },
  downloadPage: {
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center",
    width: width - 40,
    backgroundColor: "#666",
    borderRadius: 60,
    marginTop: 20,
    zIndex: 1,
    elevation: 5,
  },
  imageCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    height: 50,
    width: 370,
    alignSelf: "center",
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#E6D2FF",
    alignItems: "center",
    borderRadius: 15,
    height: "100%",
    flexDirection: "row",
  },
  searchBtn: {
    backgroundColor: "#6B3DB6",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginLeft: 5,
  },
  tabsContainer: {
    width: "100%",
    marginTop: 10,
  },
});

export default styles;
