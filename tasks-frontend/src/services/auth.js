export default function Auth() {
  const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  } else {
    return { error: "Couldnt set Authorization Headers" };
  }
}
