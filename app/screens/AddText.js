import React, { useState } from "react";
import Header from "../components/Header";
import TextData from "../components/TextData";
import BottomNav from "../components/BottomNav";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AddText = ({ navigation }) => {
  const handleBack = () => {
    // Handle the back button press
  };
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };
  let key = 0;
  const handleSubmit = async () => {
    try {
      const textData = { title: title, text: text, percentage: 0, key: key };
      key++;
      await AsyncStorage.setItem("textData", JSON.stringify(textData));
      console.log("Data saved successfully!");
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };
  return (
    <View>
      <Header title="Add a new text" onPressBack={handleBack} />
      <View style={{ height: Dimensions.get("window").height - 110 }}>
        <View style={styles.container}>
          <TextInput
            style={styles.titleInput}
            placeholder="Write a title for your text..."
            onChangeText={handleTitleChange}
            value={title}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Write your text here..."
            multiline={true}
            onChangeText={handleTextChange}
            value={text}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav navigation={navigation} activeTab={"AddText"}></BottomNav>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleInput: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
  },
  textInput: {
    height: "75%",
    width: "95%",
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
  },
  submitButtonText: {
    backgroundColor: "#5DB075",
    paddingHorizontal: 120,
    paddingVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderRadius: 100,
    fontSize: 16,
  },
});

export default AddText;
