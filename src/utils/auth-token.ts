import Cookies from "js-cookie";

const jwtSecurityToken = "lets.jwtSecurityToken";

const cookieHashToken = "lets.hashToken";

export function getAuthTokens() {
  const securityToken = localStorage.getItem(jwtSecurityToken);
  return { securityToken };
}

export function saveAuthToken(securityToken: string) {
  localStorage.setItem(jwtSecurityToken, securityToken);
}

export function clearAuthToken() {
  localStorage.removeItem(jwtSecurityToken);
}

export function saveHashToken(hashToken: string) {
  Cookies.set(cookieHashToken, hashToken, { expires: 3 });
}

export function getHashToken() {
  const hashToken = Cookies.get(cookieHashToken);
  return hashToken;
}
