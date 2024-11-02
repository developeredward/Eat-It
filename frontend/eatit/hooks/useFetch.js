const getData = async (url, header) => {
  const response = await fetch(url, header)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error("Error:", err);
      return response.json("Error:", err);
    });
  return response;
};

const postData = async (url, header, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error("Error:", err);
      return response.json("Error:", err);
    });
  return response;
};

module.exports = {
  getData,
  postData,
};
