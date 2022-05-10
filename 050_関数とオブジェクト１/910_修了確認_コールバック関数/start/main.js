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

/*自分の回答
console.log(person.hello());
const msg = console.log(person.hello()); 
setTimeout(person.hello, 1000);
setTimeout(console.log(person.hello()), 1000);
setTimeout(msg, 1000);
setTimeout(function(){return 'hello Tom';}, 1000); 

setTimeout(function(){person.hello},1000);*/


// setTimeout(/** ここに追記 */, 1000);

// 答え
setTimeout(function(){
  const hello = person.hello();
  console.log(hello);
}, 1000)

/* 
setTimeout(person.hello, 1000);がダメな理由
const personはreturnでhello Tomと返しているだけなのでこれだけだとコンソールに出力されない
無名関数でくくってから処理を記述する必要がある！！
*/






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

// 自分の回答
// setTimeout(alert(person.hello()), 1000); すぐアラートが出てしまう


// 答え
setTimeout(function(){
  const hello = person.hello();
  //alert(hello);
}, 1000)




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

function after1s(callack) { // ←　after1s(obj.greeting);参照している先の関数がセットされる
    setTimeout(callack, 1000);
}

// この時点で実行します。
after1s(obj.greeting);

// 自分の回答：heyが出力される。after1s関数の実行の前に下の書き換えが行われるため

// この後でgreetingを書き換えます。
obj.greeting = function() {
    console.log('hey');
}


// 答え
/*
function after1s(callack)〜のcallbackには、after1s(obj.greeting);のobj.greetingが参照している先の関数への参照が渡ってくる

後から書き換えたとしても、callbackが参照している先の関数をは別のものがobj.greetingにセットされる

後から上書きされても、渡した時点での関数が1秒後に実行される
*/



let obj1 = {
  prop: 10
}

let obj2 = obj1; // この二つは参照先のオブジェクトが同じである

obj1 = {}; // 新しいオブジェクトの設定
console.log(obj2); // prop:10　obj1からもらった参照先を保持している




/**
 * 問題４：
 * 以下のcalcFactoryを修正して、計算式を
 * コンソール(console.log)に表示するか、
 * ダイアログ(alert)に出力するかを
 * 使い分けできるようにしてください。
 * 
 * ※コールバック関数を用いて実装してください。
 */
function calcFactory(val, callback) {
    return {
        plus: function(target) {
            const newVal = val + target;
            callback(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            callback(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            callback(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            callback(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}

//const calc = calcFactory(10);
/*calc.plus(5); 
calc.minus(3); 
calc.multiply(3);
calc.divide(2);*/

/*
function callback1(fn1) {
  console.log(fn1());
}
function callback2(fn2) {
  alert(fn2());
}

callback1(calcFactory(20));
*/


// こたえ
const calc = calcFactory(10, console.log);
calc.plus(5); 
calc.minus(3); 
calc.multiply(3);
calc.divide(2);

//const calc2 = calcFactory(10, alert);
calc2.plus(5); 
calc2.minus(3); 
calc2.multiply(3);
calc2.divide(2);