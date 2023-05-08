const apiUrl = "https://app.easyweb.se/extapi/4531/";
const tokenUrl = "https://app.easyweb.se/connect/token";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

async function fetchToken() {
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET +
      "&grant_type=client_credentials&scope=Easyweb.ExternalApi",
  });
  const tokenObject = await response.json();
  console.log("tokenObject: ", tokenObject);
  return tokenObject.access_token;
}

export async function fetchFromRoute(route) {
  const token = await fetchToken();
  console.log("token: ", token);
  const url = apiUrl + "routes/" + route;
  const response = await fetch(url, {
    headers: { Authorization: "Bearer " + token },
  });
  const data = await response.json();
  console.log(data);
  return "hej";
}
