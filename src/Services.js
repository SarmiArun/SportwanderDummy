import axios from 'axios';

export function setHeaderToken() {
  const token = `"jdQ5cp4uRpCqICEAxITZdpTT4n1EVUqcglueS2jM9hInKfdym+/e5CW6qsswOfBKcNtdQ9B3Kh4mPbrog1lsCE1WJXmbnVU0aPVCSsJsA5Y="`;
  if (token) {
    // axios.defaults.headers.common['stadium_owner_token'] = `${token}`;
    axios.defaults.headers.common[`'Auth'`] = `${token}`;
  } else {
    delete axios.defaults.headers.common['  '];
  }
}
export function axiosInstance(method, path, data, params, header) {
  // var method = method;
  // var data = data;
  return axios({
    url: path,
    method: method.toLowerCase(), // default
    baseURL: 'http://192.168.29.24:5002',
    headers: { 'Content-Type': 'application/json' },
    // params: params,
    // data: data,
    timeout: 0
  });
}
