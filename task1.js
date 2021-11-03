const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else throw new Error("Test failed: String length not allowed");
};

module.exports = stringLength;
