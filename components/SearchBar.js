import React from "react";
import { View, TextInput } from "react-native";
import styles from "../styles.js";

const SearchBar = ({ setSearch }) => {
  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };
  return (
    <View style={styles.header}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        onChangeText={handleSearch}
        placeholder="Search..."
        style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default SearchBar;
