import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer YTKO3vvgPFy2OzXocRyPyy9aizvuGU4h1ornC7j6nw8JHefR1JAHpbqFPs9-Yym96ZTIfI2KqeqMnLP8jQu-KwGtYDhEONQQMIGxNoF81dm1MgvPkYI2JtcMxaM6ZXYx",
  },
});
