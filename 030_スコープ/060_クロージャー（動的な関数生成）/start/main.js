function addNumberFactory(num){
  function addNumber(value){
    return num + value;
  }
  return addNumber; // addNumberFactoryが実行されると、addNumberが呼び出し元に返却される
}

const add5 = addNumberFactory(5);
const result = add5(10); // addNumber(10)と同じ意味
console.log(result);

/**
 * 解説
 * 
 * addNumberFactoryに５を渡しているので、function addNumberFactory(num)のnumには５が入る
 * 
 * function addNumberFactory(5){
    function addNumber(value){
      return 5 + value;
    }
    return addNumber;
  }
 * ↓
 * returnされているので、最終的には「addNumber」が返却される
 * ↓
 * add5には、「numに5が設定されている状態のaddNumber関数」が格納されている
 * function addNumber(value){
    return 5 + value;
  }
 * 
 * add5を実行するときにはvalueの引数を取れるので、add(10)を実行すると10を渡すため、
 * function addNumber(10){
      return 5 + 10;
    }
 * resultには5 + 10 = 15が格納される
 */


  /**
  * addNumberFactoryに渡す値によって生成される関数が変わってくる
  * →動的な関数の生成
  */



  

function addNumberFactory02(num){
  function addNumber02(value){
    return num + value;
  }
  return addNumber02;
}

const add12 = addNumberFactory02(12);
const add20 = addNumberFactory02(20);
const result02 = add20(10);
console.log(result02);