/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
    hello: function () {
        return 'hello Tom';
    }
}

console.log(person.hello()); // hello Tom
const msg = console.log(person.hello()); 
setTimeout(person.hello, 1000);
setTimeout(console.log(person.hello()), 1000);
setTimeout(msg, 1000);
setTimeout(function(){return 'hello Tom';}, 1000); 

setTimeout(function(){person.hello},1000);


// setTimeout(/** ここに追記 */, 1000);

/**
 * 問題２：
 * setTimeoutの実行から１秒後にブラウザの
 * ダイアログに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 * ※alertは第一引数に渡した文字列を画面のダイアログに表
 * 示する関数です。
 */

//setTimeout(alert(person.hello()), 1000); すぐアラートが出てしまう

/**
 * 問題３：
 * objにgreetingというメソッドを実装しました。
 * これをsetTimeoutで１秒後に表示するようなafter1sの
 * 関数にコールバックとして渡しました。
 * その後objに格納したgreeting関数を別の関数で
 * 上書きしました。
 * この時、１秒後にコンソールに出力されるのは
 * 'hello'または'hey'のどちらでしょうか？
 */
const obj = {};
obj.greeting = function() {
    console.log('hello');
}

function after1s(callack) {
    setTimeout(callack, 1000);
}

// この時点で実行します。
// after1s(obj.greeting);

// heyが出力される。after1s関数の実行の前に下の書き換えが行われるため

// この後でgreetingを書き換えます。
obj.greeting = function() {
    console.log('hey');
}


/**
 * 問題４：
 * 以下のcalcFactoryを修正して、計算式を
 * コンソール(console.log)に表示するか、
 * ダイアログ(alert)に出力するかを
 * 使い分けできるようにしてください。
 * 
 * ※コールバック関数を用いて実装してください。
 */
function calcFactory(val) {
    return {
        plus: function(target) {
            const newVal = val + target;
            console.log(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            console.log(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            console.log(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            console.log(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}

const calc = calcFactory(10);
calc.plus(5); 
calc.minus(3); 
calc.multiply(3);
calc.divide(2);


function callback1(fn1) {
  console.log(fn1());
}
function callback2(fn2) {
  alert(fn2());
}

callback1(calcFactory(20));