import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import cardData from "./cardData.js";

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

  const handleSearch = (inputText) => {
    setSearch(inputText);
  };

  const footer = () => {
    if (cards.length > 0) {
      return (
        <View style={styles.footer}>
          <View style={styles.footerCredits}>
            <Text style={styles.footerText}>Proudly tested by</Text>
            <Image
              source={require("./images/srtcglogo.png")}
              style={styles.logo}
            />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.homePage}>
        <Image
          source={require("./images/KanoCover.png")}
          style={styles.coverImage}
        />
        <View style={styles.disclaimerContainer}>
          <Text style={styles.copyright}>Tome Of Rulings © Georgia Sumner</Text>
          <Text style={styles.disclaimer}>
            Flesh and Blood™ and all associated images are copyright © Legend
            Story Studios.
          </Text>
        </View>
      </View>
    );
  };
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
        <View style={styles.header}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={searchTerm}
            onChangeText={handleSearch}
            placeholder="Search"
            style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
          />
        </View>
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
          ListFooterComponent={footer}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: "center",
  },
  background: {
    position: "absolute",
    flex: 1,
    left: 0,
    top: 0,
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
    padding: 25,
    margin: -5,
  },
  title: {
    marginLeft: 40,
    width: 300,
    height: 50,
    marginTop: 60,
    marginBottom: 25,
  },
  header: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 25,
    marginBottom: 30,
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
});
