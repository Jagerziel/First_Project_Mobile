import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const styles = StyleSheet.create({
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
      alignItems: 'center',
      alignSelf: 'center'
    }
  
  });
  