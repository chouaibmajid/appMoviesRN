import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import FlatList1 from "./FlatList";

export default function Loading({dataApi}) {
  const [pourcentage, setPourcentage] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      pourcentage < 100 &&
        setPourcentage(
          (pourcentage) => pourcentage + Math.floor(Math.random() * 40)
        );
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={[tw`space-y-10`]}>
      <View
        style={[
          tw`mx-auto mt-12 h-5 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700`,
        ]}
      >
        <View
          style={{
            width: pourcentage < 101 ? `${pourcentage}%` : "100%",
            backgroundColor: "green",
            height: "20px"
          }}
        ></View>
      </View>

      <View style={[tw`text-center text-3xl font-bold`]}>
        Loading {pourcentage < 101 ? pourcentage : "100"} %
      </View>

      <View style={[tw`text-center text-3xl ${pourcentage < 100 && "hidden"}`]}>
        {( dataApi?.Response)  && <FlatList1 DATA={dataApi.Search} />}
          {(dataApi.Response === "False") && <Text>film not found</Text>}
      </View>
    </View>
  );
}
