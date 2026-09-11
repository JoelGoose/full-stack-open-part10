import { Picker } from "@react-native-picker/picker";
import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../theme";

const style = StyleSheet.create({
  picker: {
    margin: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    paddingLeft: 15,
    margin: 10,
    marginBottom: 0,
    backgroundColor: theme.colors.itemBackground,
  },
});

const SortBy = ({ sort, setSort, search, setSearch }) => {
  return (
    <View>
      <TextInput
        style={style.input}
        placeholder="Filter by keyword"
        value={search}
        onChangeText={(value) => {
          setSearch(value);
        }}
      />
      <Picker
        style={style.picker}
        selectedValue={sort}
        onValueChange={(itemValue, itemIndex) => setSort(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );
};

export default SortBy;
