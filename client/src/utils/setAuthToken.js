import axios from 'axios';

const setAuthTolen = (token) => {
  if (token) {
    // Apply for every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthTolen;
