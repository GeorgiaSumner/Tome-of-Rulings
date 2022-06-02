import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, ImageBackground } from "react-native";
import Search from "./components/SearchBar.js";
import styles from "./styles";
import cardData from "./cardData.js";
import Footer from "./components/Footer.js";
export default function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearch] = useState("");

  useEffect(() => {
    let limit = searchTerm ? 10 : 0;

    const results = cardData.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const limitedArray = results.slice(0, limit);
    setCards(limitedArray);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/cruBackground.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <Image
          source={require("./images/titleText.png")}
          style={styles.title}
        />
        <Search setSearch={setSearch} />
        <FlatList
          data={cards}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <View style={styles.listItem}>
                <Image source={item.cardImage} style={styles.cards} />
                <Text style={styles.listItemTitle}>{item.name}</Text>
                <Text style={styles.description}>{item.ruling}</Text>
              </View>
            </View>
          )}
          ListFooterComponent={<Footer cards={cards} />}
        />
      </ImageBackground>
    </View>
  );
}
