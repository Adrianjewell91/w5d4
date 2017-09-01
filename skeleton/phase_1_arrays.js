Array.prototype.unique = function unique() {
  // console.log ('ok');
  let result = [];
  for( let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])){
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function twoSum() {
  let result = [];
  for (let i = 0; i<this.length; i++) {
    let j = i+1;
    if (this[i] + this[j] === 0) {
      result.push([i,j]);
    }
  }
  return result;
};

Array.prototype.transpose = function transpose(){
  let finalResult = [];

  for( let i = 0; i < this.length; i++) {
    let result = [];

    for (let j = 0; j < this.length; j++) {
      result.push(this[j][i]);
    }

    // this.forEach((subArray) =>
    //   result.push(subArray[i]));

    finalResult.push(result);
  }

  return finalResult;
};

// [1,2,3].myEach(function cb(el) { el * 2; });
// [-1,2,3,45,6].myEach((el) => el * 2);
