import axios from 'axios';

const getQuotations = () => {
  const response = axios.get(`https://poloniex.com/public?command=returnTicker`);
  return response.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getQuotations,
};
