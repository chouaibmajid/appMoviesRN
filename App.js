import { StyleSheet, SafeAreaView, TextInput, View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import FlatList from "./src/components/FlatList";
import FlatList1 from "./src/components/FlatList";
import Loading from "./src/components/Loading";

export default function App() {
  const [movies, setMovies] = React.useState("");
  const [error, setError] = React.useState(true);
  const [etat, setEtat] = React.useState(false);

  const [dataApi, setDataApi] = React.useState([]);
  const searchMovies = async (movies) => {
    const data = await fetch(
      `https://www.omdbapi.com/?apikey=d075e0a&s=${movies}`
    ).then((res) => res.json());
    return data;
  };

  const onPressLearnMore = () => {
    if (!movies) {
      setEtat(false);
    } else {
      searchMovies(movies).then((data) => {
        setDataApi(data);
      });
      console.log(dataApi);
      setEtat(true);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={[tw`flex-row justify-center items-center border-2 rounded-full `]}>
            <View style={[tw`flex-grow`]}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => {
                  setMovies(text);
                  setEtat(false);
                }}
                value={movies}
                placeholder="Search your movies"
              />
            </View>
            <View>
              <TouchableOpacity onPress={onPressLearnMore}>
                <Icon
                  style={[tw`px-2 `]}
                  name="sc-telegram"
                  type="evilicon"
                  color="#517fa4"
                />
              </TouchableOpacity>
            </View>
          </View>
          {!movies && <Text>Vous pouvez chercher votre film</Text>}

          {etat && <Loading movies={movies} dataApi={dataApi} />}
          {/* {( dataApi?.Response)  && <FlatList1 DATA={dataApi.Search} />}
          {!dataApi.length && dataApi.Response !== "False" && <Text>Vous pouvez chercher votre film</Text>}
          {(dataApi.Response === "False") && <Text>film not found</Text>} */}
          {/* {dataApi?.map((item) => (
            <View>
              <Text>{item.Title}</Text>
            </View>
          ))} */}
          {/* {dataApi?.response === false && (
            <View>
              <Icon
                style={[tw`px-2 `]}
                name="sc-telegram"
                type="evilicon"
                color="#517fa4"
              />{" "}
            </View>
          )} */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    
  },
  container: {
    flex: 1,
    marginTop: 0,
  },
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "red",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
