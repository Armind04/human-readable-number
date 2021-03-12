module.exports = function toReadable (number) {
   let num = '' + number;
  const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function oneNumber(num) {
  return a[num];
}

function twoNumbers(num) {
  

  if (num[0] == 0 ) {
    return oneNumber(num[1]);
  }

  if (num[0] == 1) {
    return b[num - 10]
  }

  if (num[0] > 1) {
    if (num[1] == 0) {
      return c[num[0] - 2];
    } else {
      return c[num[0] - 2] + ' ' + a[num[1]];
    }
  }
}

if (num.length === 1) {
  return oneNumber(num);
}

if (num.length === 2) {
  return twoNumbers(num);
}

if (num.length === 3) {
    if (num.slice(1) == '00') {
      return oneNumber(num[0]) + ' hundred';
    } else {
      return oneNumber(num[0]) + ' hundred ' + twoNumbers(num.slice(1));
    }
    
  } 
}
