export function getUrlParams() {
  const search = window.location.search;
  if (!search) return {};

  const params = new URLSearchParams(search);
  const obj = {};

  for (let [key, value] of params) {
    obj[key] = value;
  }

  return obj;
}