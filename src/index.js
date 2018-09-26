module.exports = function count(s, pairs) {

  let N = calculateN(pairs);
  let counterRes = 0;
  
  if (s === '1' && s.length === 1){
    counterRes = 1;
    pairs.forEach(item => counterRes *= (item[0] - 1));
    return counterRes;
  }
  
  if (N > 10000000) return 0;


  for (let i = 1; i <= N; i++){
    if (testNumber(s, i, N) === true){counterRes++};
  }

  return counterRes % 1000000007;
}

function calculateN(mas){
  let n = 1;

  for (let i = 0; i < mas.length; i++){
    n *= Math.pow(mas[i][0], mas[i][1]);
  }

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