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

// Import Styles
import {styles} from './App.style.js'

// Import Icons
import { Ionicons } from '@expo/vector-icons'; 
import { render } from "react-dom";



const DATA = [
  {
    id: '1',
    title: 'Meditation',
    completed: false,
    color: "#EBC58C"
  },
  {
    id: '2',
    title: 'Coding',
    completed: false,
    color: "#6DB6DD"
  },
  {
    id: '3',
    title: 'Journeling',
    completed: false,
    color: "#BC96E6"
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
      completed: false,
      color: "#62B599"
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
      <TouchableOpacity style={[styles.item, { backgroundColor: props.item.color }]} onPress={() => markItemCompleted(props.item)}>
        <Text style={props.item.completed ? styles.itemTextCompleted : styles.itemText}>{props.item.title}</Text>
      </TouchableOpacity>
    )
  }

  const renderAddButton = () => {
    return (
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.icon}>
          <Ionicons name="add" size={24} color="#652E00" />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
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
        ListFooterComponent={renderAddButton}
      />
    </SafeAreaView>
  );
}

