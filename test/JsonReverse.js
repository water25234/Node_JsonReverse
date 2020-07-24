const should = require('should')
const app = require('../work/work')

describe('#JsonReverseInput', () => {

  const inputValue = {
    hired: {
      be: {
        to: {
          deserve: 'I'
        }
      }
    }
  };

  const outputValue = {
    I: {
      deserve: {
        to: {
           be: 'hired'
        }
      }
    }
  };

  const inputResult = [ 'hired', 'be', 'to', 'deserve', 'I' ];

  it('should return the json reverse input of array', done => {
    let inArray = [];
    app.InArrayRe(inputValue, inArray);
    inArray.join('').should.equal(inputResult.join(''))
    done()
  })

  it('should return the json reverse output of object', done => {
    let outArray = {};
    app.OutArrayRe(inputResult, outArray);
    JSON.stringify(outArray).should.equal(JSON.stringify(outputValue))
    done()
  })
})