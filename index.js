let x = 2;
let y = `2`;
let tableau = [`Maxwell`, `Ashley`, `Lewis`, `Valentine`];

const sayHello = (grown) => {
  let result;
  for (i = 0; i < grown.length; i++) {
    let onwGrown = grown[i];
    if (result == undefined) {
      result = `Hello ${onwGrown}\n`;
    } else {
      result += `Hello ${onwGrown}\n`;
    }
  }

  return result;
};

console.log(sayHello(tableau));

let total = 0;
const addition = (x, y) => {
    total = x + y;
    return total;
};
