import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2AnRDO7sTR0hpHKUzNYW5OsResHajE-eFP9YPcayn-E',
  },
});
