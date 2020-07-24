function InArrayRe(obj, inArray) {
    let key = Object.keys(obj)[0];
    let value = Object.values(obj)[0];
    inArray.push(key);

    if (typeof value === 'string') {
        inArray.push(value)
        return;
    }
    for (var forkey in obj) {
        InArrayRe(obj[forkey], inArray);
    }
}

function OutArrayRe(obj, outArray) {
    for (let i = obj.length - 1; i > 0; i--) {
      key = obj[i];
      if (!(key in outArray)){
        if (i == 1) {
            outArray[key] = obj[i - 1];
        } else {
            outArray[key] = {};
        }
      }
      outArray = outArray[key];
    }
}

exports = module.exports = {
    InArrayRe: InArrayRe,
    OutArrayRe: OutArrayRe,
};