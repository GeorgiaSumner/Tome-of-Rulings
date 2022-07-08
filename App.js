import React, { useState } from "react";
import { View, Image, ImageBackground } from "react-native";
import Search from "./components/SearchBar.js";
import Dropdown from "./components/Dropdown.js";
import CardDisplay from "./components/CardDisplay.js";
import styles from "./styles";

export default function App() {
  const [searchTerm, setSearch] = useState("");
  const [booster, setBooster] = useState("All");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/cruBackground.webp")}
        style={styles.background}
        resizeMode="cover"
      >
        <Image
          source={require("./images/titleText.webp")}
          style={styles.title}
        />
        <Search setSearch={setSearch} />
        <Dropdown setBooster={setBooster} booster={booster} />
        <CardDisplay searchTerm={searchTerm} booster={booster} />
      </ImageBackground>
    </View>
  );
}
