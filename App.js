// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { 
  Button, 
  FlatList, 
  Modal,
  Text, 
  TextInput, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  TouchableOpacity,
  View, 
} from "react-native";

// Import Icons
import { Ionicons } from '@expo/vector-icons'; 



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
  const [isModalVisible, setIsModalVisible] = useState(false)

  const addNewTodo = () => {
    let newTodo = {
      id: items.length + 1,
      title: text,
      completed: false
    }

    setItems([...items, newTodo]);
    setText("");
    setIsModalVisible(false)
  }

  const markItemCompleted = (item) => {
    const itemIndex = items.findIndex(currItem => currItem.id === item.id)
    // console.log(itemIndex)
    if (itemIndex !== -1) {
      const updatedItems = [...items]
      updatedItems[itemIndex] = {...items[itemIndex], completed: !items[itemIndex].completed}
      setItems(updatedItems)
    }
  }

  const TodoItem = (props) => {
    // console.log(props.item.title)
    return (
      <TouchableOpacity style={styles.item} onPress={() => markItemCompleted(props.item)}>
        <Text style={props.item.completed ? styles.itemTextCompleted : styles.itemText}>{props.item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
      <View style={styles.icon}>
        <Ionicons name="add" size={24} color="#652E00" />
      </View>
    </TouchableOpacity>
    <Modal 
      visible={isModalVisible} 
      transparent={true}
      onRequestClose={() => setIsModalVisible(!isModalVisible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView} >
          <TextInput 
            style={styles.input} 
            onChangeText={setText}
            value={text}
          />
          <Button
            title="Add ToDo"
            onPress={addNewTodo}
          />
        </View>
      </View>
    </Modal>
      <StatusBar style="auto" />
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
  },
  itemTextCompleted: {
    color: "#FFF",
    textDecorationLine: 'line-through'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }, 
  icon: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
