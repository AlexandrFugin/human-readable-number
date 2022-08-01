module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve' , 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  if (number == 0) {
    return 'zero';
  } 
  if (number > 0 && number <= 19) {
    return (units[number]);
  } 
  if (number > 19 && number <= 99 && number % 10 != 0) {
    let a = (dozens[number.toString()[0]] + ' ' + units[number.toString()[1]]);
    console.log(a);
    return a;
  } 
  else if (number > 19 && number <= 99) {
    return (dozens[number.toString()[0]]); 
  } 

     if (number > 99 && number <= 999) {
      if (number % 100 != 0) {
        let o = hundreds[number.toString()[0]] + ' ' + dozens[number.toString()[1]] + ' ' + units[number.toString()[2]];
        let qwerty = o.trim();
        let werty = qwerty.split('  ').join(' ');
        // console.log(werty);
        return werty;
      } 
      if (number % 100 === 0) {
        let o = hundreds[number.toString()[0]];
        let qwerty = o.trim();
        // let werty = qwerty.split('  ').join(' ');
        // console.log(qwerty);
        return qwerty;
      }
      // if (Math.trunc(number % 100 / 10) == 1) {
      // //     // console.log(number[1]);
      //     let y = hundreds[number.toString()[0]] + ' ' + dozens[number.toString()[1]];
      //     console.log(y);
      //   return y;
      // } 
      // else if (Math.trunc(number % 100 / 10) == 0) {
      //   let q = hundreds[number.toString()[0]] + ' ' + units[number.toString()[2]];
      //   return q;
      // }
    }

  // else {
  //   return (0);
  // }
}
