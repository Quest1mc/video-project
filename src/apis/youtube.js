 import axios from 'axios';


const KEY = 'AIzaSyCzdJhUmzMaU0tM0BlTrpjYwp2Ey_0ZuzY';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY

    }
});