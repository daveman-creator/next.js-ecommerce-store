import Cookies from 'js-cookie';

// more robust way to get items from cookies without parsing all the time
export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type should be a string
  } catch (error) {
    return undefined;
  }
}

// more robust way to get items to set the cookies without stringify all the time
export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key) {
  Cookies.remove(key);
}

export function stringifyCookieValue(value) {
  return JSON.stringify(value);
}

// (value: CookieValue)
// (key: string)
