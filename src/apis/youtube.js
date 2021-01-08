import axios from 'axios';

const KEY = 'AIzaSyDp9O-VxgtKwOTYcOUSvi2oZrVDDH4OtV4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});