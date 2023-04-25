import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TextData from "../components/TextData";
import BottomNav from "../components/BottomNav";
import { KeyboardAvoidingView } from "react-native";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Usage:

const AddText = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [fileCounter, setFileCounter] = useState(0);

  const handleBack = () => {
    // Handle the back button press
  };

  useEffect(() => {
    const loadCounter = async () => {
      try {
        const storedCounter = await AsyncStorage.getItem("fileCounter");
        if (storedCounter !== null) {
          setFileCounter(parseInt(storedCounter));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadCounter();
  }, []);

  const handleTextChange = (newText) => {
    setText(newText);
  };
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const saveFormData = async () => {
    const key = `file:${fileCounter + 1}`;
    const formData = {
      title: title,
      text: text,
      percentage: 0,
    };

    try {
      await AsyncStorage.setItem(key, JSON.stringify(formData));
      setFileCounter(fileCounter + 1);
      await AsyncStorage.setItem("fileCounter", `${fileCounter + 1}`);
      // clear form data after submission
      setTitle("");
      setText("");
    } catch (error) {
      console.log(error);
    }
  };
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // form validation logic
    // ...
    saveFormData();
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
          <TouchableOpacity onPress={handleSubmit}>
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
    height: Dimensions.get("window").height - 110,
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
