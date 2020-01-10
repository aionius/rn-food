import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import yelp from "../api/Yelp";

const SearchScreen = () => {
   const [term, setTerm] = useState("");
   const [results, setResults] = useState([]);
   const [errors, setErrors] = useState("");

   const filterResultsByPrice = price => {
      return results.filter(result => {
         return result.price === price;
      });
   };

   const searchApi = async searchTerm => {
      try {
         const response = await yelp.get("/search", {
            params: {
               term,
               searchTerm,
               location: "Boston",
               limit: 50
            }
         });
         setResults(response.data.businesses);
      } catch (err) {
         setErrors("Something went wrong...");
      }
   };

   useEffect(() => {
      searchApi("pasta");
   }, []);

   return (
      <View style={{ flex: 1 }}>
         <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
         />
         {errors ? <Text>{errors}</Text> : null}

         <ScrollView>
            <ResultList
               results={filterResultsByPrice("$")}
               title="Cost Effective"
            />
            <ResultList
               results={filterResultsByPrice("$$")}
               title="Bit Pricier"
            />
            <ResultList
               results={filterResultsByPrice("$$$")}
               title="Big Spender"
            />
            <ResultList
               results={filterResultsByPrice("$$$$")}
               title="High Rollers"
            />
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({});

export default SearchScreen;
