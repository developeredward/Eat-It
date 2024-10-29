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

module.exports = {
  getData,
};
