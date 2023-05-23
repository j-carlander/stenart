const apiUrl = "https://app.easyweb.se/extapi/4531/";
const tokenUrl = "https://app.easyweb.se/connect/token";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

async function fetchToken() {
  try {
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
    return tokenObject.access_token;
  } catch (err) {
    console.log(err);
    return "no_token";
  }
}

export async function fetchFromRoute(route) {
  // try {
  const token = await fetchToken();

  if (token === "no_token") throw new Error("No token recieved");

  const url = apiUrl + "routes/" + route;
  const response = await fetch(url, {
    headers: { Authorization: "Bearer " + token },
  });
  const data = await response.json();
  return data;
  // } catch (err) {
  //   console.log(err);
  //   return "no_data";
  // }
}
