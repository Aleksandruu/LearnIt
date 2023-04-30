import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FillTheBlanksScreen = ({ route, navigation }) => {
  const { data } = route.params;
  //Cuvintele din text:
  const words = data.text.split(/\s+|(?=[.,!?\s])/);

  //Cuvintele care urmeaza sa fie inlocuite sub forma {index, word}
  const blankWords = [];
  for (let i = 0; i < words.length; i += 10) {
    const wordsSlice = words.slice(i, i + 10);
    const longestWordIndex = wordsSlice
      .map((word, index) => ({ word, index: i + index }))
      .sort((a, b) => b.word.length - a.word.length)[0].index;
    const word = { index: longestWordIndex, word: words[longestWordIndex] };
    blankWords.push(word);
  }
  // useState pentru handle text change din inputuri de forma [{index, word}]
  const [textWords, setTextWords] = useState(
    words.map((word, index) =>
      blankWords.map((x) => x.index).includes(index)
        ? { index: index, word: "", color: "0" }
        : undefined
    )
  );
  const savePercentage = async (percentage) => {
    try {
      data.percentage =
        data.percentage < percentage ? percentage : data.percentage;
      await AsyncStorage.setItem(data.key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  // HANDLE SUBMIT
  const handleSubmit = () => {
    const enteredText = [...textWords];
    let count = 0;
    // check if the entered text matches the replaced words
    for (let i = 0; i < blankWords.length; i++) {
      const blankWord = blankWords[i];
      const enteredWord = enteredText[blankWord.index].word.trim();
      const replacedWord = blankWord.word;
      if (
        enteredWord.normalize("NFKD").replace(/[^\w]/g, "").toLowerCase() ===
        replacedWord.normalize("NFKD").replace(/[^\w]/g, "").toLowerCase()
      ) {
        enteredText[blankWord.index].color = "green";
        count++;
      } else {
        enteredText[blankWord.index].color = "red";
      }
    }
    const percentage = Math.floor(count / blankWords.length) * 100;
    savePercentage(percentage);
    // update the state with the new color values
    setTextWords(enteredText);
  };
  return (
    <View>
      <Header navigation={navigation} back={1} title="Fill the blanks" />
      <View
        style={{
          height: Dimensions.get("window").height - 60,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ScrollView style={{ height: "80%", padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              height: "70%",
            }}
          >
            {/* mapam cuvintele in componente input sau text */}
            {words.map((word, index) => {
              // daca apare indexul in vectorul de cuvinte marcate punem input
              if (blankWords.map((x) => x.index).includes(index)) {
                return (
                  <TextInput
                    //cheia e indexul cuvantului care este inlocuit
                    key={index}
                    //valuarea este luata din useState si initial este 0
                    value={textWords[index].word}
                    //onChange modificam valuarea din state creand un obiect de forma {value, index}
                    onChangeText={(value) =>
                      //apelam un arrow function pentru a seta stateul
                      setTextWords((prevWords) => {
                        //newWords e o copie a lui prevWords adica a lui textWords
                        const newWords = [...prevWords];
                        //modificam cuvantul de la indexul index
                        newWords[index] = {
                          word: value,
                          index: index,
                          color: "gray",
                        };
                        return newWords;
                      })
                    }
                    maxLength={words[index].length}
                    style={{
                      fontSize: 16,
                      width: words[index].length * 8,
                      marginLeft: 6,
                      borderBottomWidth: 1,
                      color:
                        textWords[index].color === "green"
                          ? "green"
                          : textWords[index].color === "red"
                          ? "red"
                          : "#A9A9A9",
                      borderBottomColor:
                        textWords[index].color === "green"
                          ? "green"
                          : textWords[index].color === "red"
                          ? "red"
                          : "gray",
                      paddingBottom: 0,
                    }}
                  />
                );
              } else {
                return (
                  <Text
                    key={index}
                    style={{
                      lineHeight: 28,
                      fontSize: 16,
                      marginLeft: [",", ".", "!", "?"].includes(word) ? 0 : 6,
                    }}
                  >
                    {word}
                  </Text>
                );
              }
            })}
          </View>
        </ScrollView>
        <TouchableOpacity onPress={handleSubmit}>
          <Text
            style={{
              backgroundColor: "#5DB075",
              paddingHorizontal: 120,
              paddingVertical: 15,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
              borderRadius: 100,
              fontSize: 16,
              width: 300,
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FillTheBlanksScreen;
