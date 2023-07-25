export const get = (key) => {
  const cookieValue = document.cookie.split("; ").find((cookie) => cookie.startsWith(key + "="));

  if (cookieValue) {
    return decodeURIComponent(cookieValue.split("=")[1]);
  }
  return null;
};
