const getUser = (req, res) => {
  res.send({
    success: true,
    message: "Data Coming From MVC Pattern",
  });
};

const addUser = (req, res) => {
  const { inputData } = req.body;
  res.json({
    success: true,
    message: `Welcome ${inputData}`,
  });
};

module.exports = { getUser, addUser };
