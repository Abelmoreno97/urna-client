export const get = (key) => {
  const cookieValue = document.cookie.split("; ").find((cookie) => cookie.startsWith(key + "="));

  if (cookieValue) {
    return decodeURIComponent(cookieValue.split("=")[1]);
  }
};
export const getObject = (key) => {
  const cookieValue = document.cookie.split("; ").find((cookie) => cookie.startsWith(key + "="));

  if (cookieValue) {
    return JSON.parse(decodeURIComponent(cookieValue.split("=")[1]).slice(2));
  }
};
