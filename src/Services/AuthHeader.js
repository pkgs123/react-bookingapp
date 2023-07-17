import Store from "../redux/store";

export default async function authHeader() {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
  } else {
    return {
      Accept: "application/json",
    };
  }
}
