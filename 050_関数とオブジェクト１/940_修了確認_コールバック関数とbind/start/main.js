/**
 * 問題：
 * 【修了確認】コールバック関数で実装したcalcFactoryを
 * １秒後にconsole.logまたはalertで計算式が表示される
 * ようにcalcFactory関数内の実装を変更してみてください。
 */
function calcFactory(val, callback) {

  /**
   * 以下だとコンソールに何も出力されない
   * function callbackAfter1s (){
    setTimeout(callback, 1000);
  }
　↑ console.logまたはalertがただ渡ってきているだけになる。setTimeout(console.log, 1000);の状態。
  callbackAfter1s(`${val} + ${target} = ${newVal}`);
  */


  function callbackAfter1s (str){ // 文字列を受け取る引数str
    setTimeout(callback.bind(null, str), 1000); // strをcallbackに渡してあげたい
  }


  return {
    plus: function(target) {
      const newVal = val + target;
      callbackAfter1s(`${val} + ${target} = ${newVal}`); // 引数として文字列が渡されている
      val = newVal;
    },
    minus: function(target) {
      const newVal = val - target;
      callbackAfter1s(`${val} - ${target} = ${newVal}`);
      val = newVal;
    },
    multiply: function(target) {
      const newVal = val * target;
      callbackAfter1s(`${val} x ${target} = ${newVal}`);
      val = newVal;
    },
    divide: function(target) {
      const newVal = val / target;
      callbackAfter1s(`${val} / ${target} = ${newVal}`);
      val = newVal;
    }
  };
}

const calc = calcFactory(10, console.log);
calc.plus(5); 
calc.minus(3); 
calc.multiply(3);
calc.divide(2);