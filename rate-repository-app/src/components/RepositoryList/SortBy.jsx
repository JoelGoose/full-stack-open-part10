import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  picker: {
    margin: 10,
    padding: 10,
  },
});

const SortBy = ({ sort, setSort }) => {
  return (
    <Picker
      style={style.picker}
      selectedValue={sort}
      onValueChange={(itemValue, itemIndex) => setSort(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  );
};

export default SortBy;
