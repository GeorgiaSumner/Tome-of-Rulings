import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import filter from "lodash.filter";

const renderHeader = ({ setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
      }}
    >
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        onChange={handleSearch}
        placeholder="Search"
        style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default renderHeader;
