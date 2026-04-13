const axios = require("axios");

const getGenderData = async (name) => {
  const response = await axios.get(
    `https://api.genderize.io?name=${name}`
  );

  return response.data;
};

module.exports = { getGenderData };