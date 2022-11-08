// 将token存储到localStorage中，因为vuex不能长时间保留
export const setToken = (token) => {
  localStorage.setItem('TOKEN', token);
}

export const getToken = () => {
  return localStorage.getItem('TOKEN');
}

// 清除localStorege中的token
export const removeToken = () => {
  localStorage.removeItem("TOKEN");
}