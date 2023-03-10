import axios from 'axios';

export function setHeaderToken(t) {
  const d = {
    token: t
  };
  if (t) {
    axios.defaults.headers.common = d;
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
    // baseURL: 'http://192.168.29.177:5003',
    baseURL: `${process.env.REACT_APP_API}`,
    // headers: { 'Content-Type': 'application/json', token: `${token}` },
    // headers: { 'Content-Type': 'application/json', header },
    params,
    data,
    timeout: 0
  });
}
