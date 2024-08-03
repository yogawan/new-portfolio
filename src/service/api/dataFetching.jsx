import axios from 'axios';

const API_KEY = 'eEmp1gaqJAMdjxknD8BpsgxO3llLDdfaRUeN5MILwxLLifuaFkGfnRHQIqMWpHYYYSOrBlOJNUnxFIQzSAeGfbow0Wv8hHKQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAeKYg2_UQtWnMGufn0p00QCL6bbplqciqT3lDqvfQ6BmqhrFtn3EU0lyNjZbnR9BgyoLqRFQGJY6XkRHtl5E1R3U62ayiKHJ9z9Jw9Md8uu&lib=M210bAo23dVDqBovQm6pzNCvTTABYAXY9';

const fetchData = async () => {
  try {
    const response = await axios.get(`https://script.googleusercontent.com/macros/echo?user_content_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;