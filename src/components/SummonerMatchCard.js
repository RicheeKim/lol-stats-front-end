getImage = (hogName) => {
  let formattedName = hogName
    .split(" ")
    .join("_")
    .toLowerCase();
  let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
  return pigPics;
};
