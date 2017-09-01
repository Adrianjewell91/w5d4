Array.prototype.bubbleSort = function bubbleSort() {
  let isSorted = false;
  do {
    isSorted = true;
      for (let i = 0; i <= this.length - 2; i++) {
        if (this[i] > this[ i + 1 ]) {
          let a = this[i];
          let b = this[i + 1];
          this[i] = b;
          this[i +1] = a;
          isSorted = false;
        }
      }
  }
  while (isSorted === false);
  return this;
};

String.prototype.subStrings = function subStrings () {
  let result = [];
  for(let i = 0; i< this.length; i++) {

    for(let j = i + 1; j < this.length + 1; j++) {
      result.push(this.slice(i,j));
    }

  }
  return result;
};
