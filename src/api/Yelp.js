import axios from "axios";

export default axios.create({
   baseURL: "https://api.yelp.com/v3/businesses",
   headers: {
      Authorization:
         "Bearer gXiPZ-RBbyLqiY5hjr3qWAeifNTWdCFZ23kKrs19eilxaM1eChihIsUVhu1jXiY1y9X403mJKW_Bt5RYT_jtLQB_gLfeaA_CUpVqN3ieQVtlzG5qrc9WlunB9xMWXnYx"
   }
});
