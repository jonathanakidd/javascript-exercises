const add = function(...numbers) {
  let sum = 0;
  numbers.forEach(i => {
    if (Array.isArray(i)) {
      i.forEach(num => {
        if (num === null) {
          num = 0;
        }
        sum += num;
      })
    }
    else {
      sum += i;
    }
  });
  return sum;
};

const subtract = function(a, b) {
  let sum = 0;
  sum = a-b;
  return sum;
};

const sum = function() {
	
};

const multiply = function(...numbers) {
  let sum = 1;
  numbers.forEach(i => {
    if (Array.isArray(i)) {
      i.forEach(num => {
        if (num === null) {
          num = 0;
        }
        sum *= num;
      })
    }
    else {
      sum = i * sum;
    }
  });
  return sum;
};

const power = function(a,b) {
  let sum = a ** b;
  return sum
};

const factorial = function(number) {
  let ans = 1;
  if (number === 0) {
    return ans;
  }
  else {
    for (let i = 2; i <= number; i++) {
      ans = ans * i;
    }
    return ans;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
