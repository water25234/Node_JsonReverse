const app = require('./work/work')

let inArray = [];
let outArray = {};

const inputValue = {
    hired: {
      be: {
        to: {
          deserve: 'I'
        }
      }
    }
  };

app.InArrayRe(inputValue, inArray);
app.OutArrayRe(inArray, outArray);

console.log(JSON.stringify(outArray));