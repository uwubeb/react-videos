import axios from 'axios';

const KEY = 'AIzaSyBwS9bE2VaeW8qVNJqOpvgEG8a2xB-lmi8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
