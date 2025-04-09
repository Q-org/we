fetch("https://qio/root/api/auth/callback/credential", {
  headers: {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "csrf-token":
      "6ed3f1f3e0cba517f0cd015c055e52ab1b4363bf18c96c00fd18a0d7bdce5047",
    "sec-ch-ua":
      '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  referrer: "https://qio/reactRepo/LogIn",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: "userId=qrxi&password=qrxi&prefix=%2Fjc&csrfData=6ed3f1f3e0cba517f0cd015c055e52ab1b4363bf18c96c00fd18a0d7bdce5047",
  method: "POST",
  mode: "cors",
  credentials: "include",
});
