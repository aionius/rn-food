import { useEffect, useState } from "react";

import yelp from "../api/Yelp";

export default () => {
   const [results, setResults] = useState([]);
   const [errors, setErrors] = useState("");

   const searchApi = async searchTerm => {
      console.log("search called!");
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

   return [searchApi, results, errors];
};
