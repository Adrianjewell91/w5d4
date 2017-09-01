
Array.prototype.myEach = function myEach (cb) {
  for(let i = 0; i<this.length; i++) {
    cb(this[i]);
  }
};

const nTimesTwo = function nTimesTwo(num) {
  return num*2;
};

Array.prototype.myMap = function myMap (cb) {
  let result = [];
  this.myEach((el) => result.push(cb(el)));
  return result;
};

Array.prototype.mySimpleMap = function myEach (cb) {
  let result = [];
  for(let i = 0; i<this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};


Array.prototype.myReduce = function myReduce(cb, initialAccumulator) {
  let acc;
  let i;
  if (typeof initialAccumulator === 'undefined') {
    acc = this[0];
    i = 1;
  } else {
    acc = initialAccumulator;
    i = 0;
  }

  this.slice(i).myEach( function(el) { acc = cb(acc,el); } );

  return acc;
};
