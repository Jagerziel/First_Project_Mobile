// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, SafeAreaView, StatusBar } from "react-native";

const DATA = [
  {
    id: '1',
    title: 'Meditation',
    completed: false,
  },
  {
    id: '2',
    title: 'Coding',
    completed: false,
  },
  {
    id: '3',
    title: 'Journeling',
    completed: false,
  }
]

const TodoItem = (props) => {
  // console.log(props.item.title)
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.item.title}</Text>
    </View>
  )
}
/*
// ALTERNATE METHOD: USING A FUNCTION INSTEAD OF ARROW FUNCTION. ALLOWS FOR PLACEMENT ANYWHERE WITHIN COMPONENT.

function TodoItem (props) {
  return (
    <View>
      <Text>{props.item.title}</Text>
    </View>
  )
}
*/
export default function App() {
  const [items, setItems] = useState(DATA)
  const [text, setText] = useState("")

  const addNewTodo = () => {
    let newTodo = {
      id: items.length + 1,
      title: text,
      completed: false
    }

    setItems([...items, newTodo]);
    setText("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Testing Change!</Text>
      <StatusBar style="auto" />
      <TextInput 
        style={styles.input} 
        onChangeText={setText}
        value={text}
      />
      <Button
        title="Add ToDo"
        onPress={addNewTodo}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        style={styles.list}
        // keyExtractor={(item, index) => index} // ANOTHER METHOD TO THE ABOVE
        renderItem={({item}) => <TodoItem item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray"
  },
  list: {
    alignSelf: 'stretch'
  },  
  item: {
    backgroundColor: '#6DB6DD',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    color: "#FFF"
  }
});
