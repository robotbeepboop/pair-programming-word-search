//pair programming with Matthew Charm, Ciara Biddiscombe, Kamile Lemaire

const transpose = function (matrix) {
 
  let array = [];

  for (let i = 0; i < matrix[0].length; i++) {
      array.push([]);
  };

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      array[c][r] = matrix[r][c];
    }
  }
  return array;
};

const wordSearch = (letters, word) => { 
    let horizontalJoin = letters.map(ls => ls.join('')); //use .map for vert as well
    for (let x of horizontalJoin) {
        if (x.includes(word)) return true;
    }
    let verticalJoin = transpose(letters).map(y => y.join('')); //can use transpose instead ??
    for (let y of verticalJoin) {
        if (y.includes(word)) return true;
    }

    return false;
};


module.exports = wordSearch;
