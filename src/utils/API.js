import axios from "axios";

const BASEURL = "https://api.unsplash.com/photos/random?count=15&orientation=squarish&client_id=";
const APIKEY = "b457260525de27ea96e1a5e2e4f91b8ef35e5adc6bb8a6118c7d224657cbbf8d";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL + APIKEY);
  }
};
