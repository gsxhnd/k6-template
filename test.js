import http from "k6/http";

const BASE_URL = "https://test.k6.io";

export default function () {
  const payload = JSON.stringify({
    email: "aaa",
    password: "bbb",
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  http.post(BASE_URL + "/login", payload, params);
}
