import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import AppButton from '../components/AppButton';
import listingsApi from "../api/listings";
import Colors from "../config/colors";
import Screen from "../components/Screen";
import Card from "./Card";
import AppText from "../components/AppText";


function Listings({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading]  = useState(false)

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true)
    const response = await listingsApi.fetchListings();
    setLoading(false)
    if(!response.ok) return setError(true);
    
    setError(false)
    return setListings(response.data);
  };
  return (
    <Screen style={styles.container}>
      {error && <>
        <AppText >Opps. Couldnt retriee the listings</AppText>
        <AppButton onPress={loadListings} title="Retry"></AppButton>
      </>}
    {loading &&  <ActivityIndicator size="large" color="#0000ff"  /> }
     
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
