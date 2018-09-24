module.exports = function count(s, pairs) {
  pairs.sort((a, b) => a[0] - b[0]);
  let N = calculateN(pairs);

  let counterRes = 0;
  if (N === Infinity) return 0;
  for (let i = 1; i <= N; i++){
    if (testNumber(s, i, pairs) === true){counterRes++};
  }

  if (N.count > 0) counterRes = counterRes * N.count;

  return counterRes % 1000000007;
}

function calculateN(mas){
  let n = 1;
  let count = 0;

  for (let i = 0; i < mas.length; i++){

    // for (let j = 1; j <= mas[i][1]; j++){
    //   n *= mas[i][0];
    //   if (n / 1000000000 > 1){
    //     count += Math.trunc(n / 1000000000);
    //     n = n % 1000000000;
    //   }
    // }

    n *= Math.pow(mas[i][0], mas[i][1]);

  }
  // return {
  //         value: (count > 0) ? 1000000000 : n,
  //         count: count};
  return n;
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

function testNumber (s, num, mas){
  for (let i = 0; i < s.length; i++){

     if (s[i] === '0' && testAllMultipliers((num + i), mas) === false){
       return false;
     }

     if (s[i] === '1' && testAllMultipliers((num + i), mas) === true){
       return false;
     }
  }

  return true;
}

function testAllMultipliers(num, mas){

  for (let i = 0; i < mas.length; i++){
    if (nod(num, mas[i][0]) !== 1) return true;
  }
  return false;
}

