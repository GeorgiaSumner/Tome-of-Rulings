import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Dropdown = ({ setBooster, booster }) => {
  return (
    <View>
      <Picker
        onValueChange={(value, index) => setBooster(value)}
        selectedValue={booster}
        mode="dropdown" // Android only
      >
        <Picker.Item label="All Sets" value="All" />
        <Picker.Item label="Welcome to Rathe" value="WTR" />
        <Picker.Item label="Arcane Rising" value="ARC" />
        <Picker.Item label="Crucible of War" value="CRU" />
        <Picker.Item label="Tales of Aria" value="ELE" />
        <Picker.Item label="Everfest" value="EVR" />
      </Picker>
    </View>
  );
};

export default Dropdown;
