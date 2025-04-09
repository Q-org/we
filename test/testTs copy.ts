import FetchClass from "@wei/js/src/lib/FetchClass";
(async () => {
  const fetchInstance = new FetchClass("https://qio.wiki");

  // 发送 POST 请求
  const postResponse = await fetchInstance.post(
    "n",
    // postData,
    {},
  );
})();
