import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001', headers: {'Access-Control-Allow-Origin': '*'} });

// export const testPost = () => API.get('/plants');

export function testPost() {
    let url = 'http://localhost:5001/plants'
    fetch(url, {
        method: 'GET',
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      }).then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
}
