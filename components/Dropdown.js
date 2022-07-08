import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles.js";

const Dropdown = ({ setBooster, booster }) => {
  return (
    <View style={styles.header}>
      <Picker
        onValueChange={(value) => setBooster(value)}
        selectedValue={booster}
        mode="dropdown"
        style={styles.dropdown}
      >
        <Picker.Item label="All Cards" value="All" />
        <Picker.Item label="Key Words" value="KEYWORD" />
        <Picker.Item label="Welcome to Rathe" value="WTR" />
        <Picker.Item label="Arcane Rising" value="ARC" />
        <Picker.Item label="Crucible of War" value="CRU" />
        <Picker.Item label="Tales of Aria" value="ELE" />
        <Picker.Item label="Everfest" value="EVR" />
        <Picker.Item label="Uprising" value="UPR" />
      </Picker>
    </View>
  );
};

export default Dropdown;
