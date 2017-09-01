const range = function range(start, end) {
  if (start === end) {
    return [start];
  } else {
    return [start].concat(range(start + 1, end));
  }
};


const sumRec = function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
};

const exponentVOne = function exponentVOne (b,n) {
  if (n===0) {
    return 1;
  }
  else if (n===1) {
    return b;
  }
  else {
      return b * exponentVOne( b , n - 1 );
  }
};

const exponentVTwo = function exponentVTwo (b,n) {
  if (n===0) {
    return 1;
  }
  else if (n===1) {
    return b;
  }
  else if (n % 2 === 0) {
      return exponentVTwo( b , n / 2 ) *  exponentVTwo( b , n / 2 ) ;
  }
  else {
    return b * (exponentVTwo( b , (n - 1) / 2 ) *
      exponentVTwo( b , (n - 1) / 2 ));
  }
};

const fibonacci = function fibonacci(n) {
  if (n===1) {
    return [0];
  } else if (n === 2) {
    return [0,1];
  } else {
    let fibs = fibonacci(n-1);
    fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
    return fibs;
  }
};

const bsearch = function bsearch(arr, target) {
  let midIndex = arr.length / 2;

  let firstHalf = arr.slice(0,midIndex);
  let secondHalf = arr.slice(midIndex, arr.length);

  

};
