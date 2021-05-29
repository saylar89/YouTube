import axios from "axios";

const KEY = "AIzaSyBPif1sGEa4wVA7ULBWBVVCcu0GUGGv8vg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
