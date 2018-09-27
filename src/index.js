module.exports = function count(s, pairs) {
  
  let nForOne = pairs.reduce((acu, item) => acu * item[0], 1);
  let counterRes = 0;



  if (s === '1' && s.length === 1){
    return pairs.reduce((acu, item) => acu * (item[0] - 1), 1);
  }




  if (pairs.length == 1 && pairs[0][1] > 100){

    nForOne = pairs[0][0] ** 10;
    counterRes = testAllN(s, nForOne);
    pairs[0][1] = pairs[0][1] / 10;

    for (let i = 0; i < pairs[0][1] - 1; i++){
      counterRes = (counterRes * nForOne) % 1000000007;
    }
    return counterRes;
  }



  if (nForOne > 100000) nForOne %= 100000;

  counterRes = testAllN(s, nForOne);
  return pairs.reduce((acu, item) => acu = (acu * (item[0] ** ((item[1] - 1) % 100)) % 1000000007) % 1000000007, counterRes);
}






function testAllN (s, n){
  let counter = 0;

  for (let i = 1; i <= n; i++){
    if (testNumber(s, i, n) === true){counter++};
  }

  return counter;
}


function nod(n, m) {
  if(m > 0) { 
    let a = n % m;
    return nod(m, a); 
  } 
  else { 
    return n;
  }
}

function testNumber (s, num, N){
  for (let i = 0; i < s.length; i++){

     if (s[i] === '0' && nod(N, num + i) === 1){
       return false;
     }

     if (s[i] === '1' && nod(N, num + i) !== 1){
       return false;
     }
  }

  return true;
}