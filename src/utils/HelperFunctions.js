export const getToken = () => {
  const rememberMe = localStorage.getItem('rememberMe');
  return rememberMe
    ? localStorage.getItem('token')
    : sessionStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('rememberMe');
};

export const setToken = (value) => {
  const rememberMe = localStorage.getItem('rememberMe');
  rememberMe
    ? localStorage.setItem('token', value)
    : sessionStorage.setItem('token', value);
};
