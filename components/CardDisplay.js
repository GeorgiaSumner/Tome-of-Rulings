import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList } from "react-native";
import styles from "../styles.js";
import cardData from "../cardData.js";
import Footer from "./Footer.js";

const CardDisplay = ({ searchTerm, booster }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let limit =
      booster !== "All" || searchTerm.length > 2
        ? Infinity
        : searchTerm
        ? 10
        : 0;
    const results = cardData.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let filteredResults =
      booster === "All"
        ? results
        : results.filter((card) => card.set === booster);

    const limitedArray = filteredResults.slice(0, limit);

    setCards(limitedArray);
  }, [searchTerm, booster]);
  return (
    <FlatList
      data={cards}
      renderItem={({ item }) => (
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Image
              source={item.cardImage}
              style={item.cardImage ? styles.cards : ""}
            />
            <Text style={styles.listItemTitle}>{item.name}</Text>
            <Text style={styles.description}>{item.ruling}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={<Footer cards={cards} booster={booster} />}
    />
  );
};

export default CardDisplay;
