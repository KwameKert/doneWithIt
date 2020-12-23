import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import listingsApi from "../api/listings";
import Colors from "../config/colors";
import Screen from "../components/Screen";
import Card from "./Card";


function Listings({ navigation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.fetchListings();
    // console.log(response.data)
    setListings(response.data);
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.name}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            imageUrl={item.link}
            subTitle={"$" + item.price}
            onPress={() =>{ 
             
                navigation.navigate("FeedDetail", item)
            }}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },
  screen: {},
});

export default Listings;
