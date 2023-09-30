import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from "react-native";

const DATA = [
  {
    id: 1,
    title: 'Meditation'
  },
  {
    id: 2,
    title: 'Coding'
  },
  {
    id: 3,
    title: 'Journeling'
  }
]

const TodoItem = (props) => {
  // console.log(props.item.title)
  return (
    <View>
      <Text>{props.item.title}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Testing Change!</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} />
      <Button
        title="start"
        onPress={() => Alert.alert("simple button pressed")}
      />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <TodoItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
  },
});
