export const setToken = (type, token) => {
  localStorage.setItem(type, token);
};

export const getToken = type => {
  return localStorage.getItem(type);
};

export const removeToken = type => {
  localStorage.removeItem(type);
};
