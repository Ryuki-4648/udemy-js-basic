/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 * 
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 * 
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 * 
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
*/


/* 自分の回答
function calcFactory(number = 10) {
  let result1;
  let result2;
  let result3;
  let result4;

  function plus(plusNum) {
    result1 = number + plusNum;
  }
  function minus(minusNum) {
    result2 = result1 - minusNum;
  }
  function multiply(multiplyNum) {
    result3 = result2 * multiplyNum;
  }
  function divide(divideNum) {
    result4 = result3 / divideNum;
  }

  return plus, minus, multiply, divide;
}

const calc = calcFactory(10);
console.log(calc.plus(5));
*/


// 回答例
function calcFactory(val) {
  return {
    plus: function(target){
      const newVal = val + target;
      console.log(`${val} + ${target} = ${newVal}`);
    },
    minus: function(target){
      const newVal = val - target;
      console.log(`${val} - ${target} = ${newVal}`);
    }
  };
}

const calc = calcFactory(10);
calc.plus(5);
calc.minus(3); 