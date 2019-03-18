export function getCookie(cookieName) {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const splitCookie = decodedCookie.split(';');

  for (let i = 0; i < splitCookie.length; i++) {
    let cookieItem = splitCookie[i];
    while (cookieItem.charAt(0) === ' ') {
      cookieItem = cookieItem.substring(1);
    }
    if (cookieItem.indexOf(name) === 0) {
      return cookieItem.substring(name.length, cookieItem.length);
    }
  }
  return '';
}

export function clearCookie() {
  document.cookie = 'token=;path=/';
}

export const saveCookie = (cookieName, value) => {
  const now = new Date();
  now.setTime(now.getTime() + 24 * 3600 * 1000);
  document.cookie = `${cookieName}= ${value};expires= + ${now.toUTCString()} + ;";path=/`;
};

export function haveToken() {
  const token = getCookie('token');
  return !!token.length;
}
