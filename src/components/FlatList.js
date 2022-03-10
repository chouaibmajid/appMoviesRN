import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const CardFilm = ({ title, Poster }) => (
  <View style={[tw`w-3/4 border rounded-2xl bg-gray-100 my-3 flex-col justify-center items-center px-3 mx-auto `]}>
    <Text style={[tw`text-xl font-bold text-center my-2`]}>{title}</Text>
    <Image style={{width: 200 , height: 120 , resizeMode: "cover" , marginBottom : 10}} source={{ uri: Poster }} />
  </View>
);

const FlatList1 = ({ DATA }) => {
  const renderItem = ({ item }) => (
    <CardFilm title={item.Title} Poster={item.Poster} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  title: {
    fontSize: 32,
  },
});

export default FlatList1;
