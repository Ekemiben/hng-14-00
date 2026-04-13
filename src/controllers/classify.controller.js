const { getGenderData } = require("../services/genderize.service");

const classifyName = async (req, res) => {
  try {
    const { name } = req.query;

    // ✅ VALIDATION

    // Missing or empty
    if (!name || name.trim() === "") {
      return res.status(400).json({
        status: "error",
        message: "Name query parameter is required",
      });
    }

    // Non-string
    if (typeof name !== "string") {
      return res.status(422).json({
        status: "error",
        message: "Name must be a string",
      });
    }

    // ✅ CALL EXTERNAL API
    const apiResponse = await getGenderData(name);

    const { gender, probability, count } = apiResponse;

    // ✅ EDGE CASE
    if (!gender || count === 0) {
      return res.status(422).json({
        status: "error",
        message:
          "No prediction available for the provided name",
      });
    }

    // ✅ PROCESS DATA
    const sample_size = count;

    const is_confident =
      probability >= 0.7 && sample_size >= 100;

    const processed_at = new Date().toISOString();

    // ✅ RESPONSE
    return res.status(200).json({
      status: "success",
      data: {
        name,
        gender,
        probability,
        sample_size,
        is_confident,
        processed_at,
      },
    });
  } catch (error) {
    console.error(error.message);

    return res.status(502).json({
      status: "error",
      message: "Failed to fetch data from Genderize API",
    });
  }
};

module.exports = { classifyName };