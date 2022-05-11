const person = {
    name: 'Tom',
    bye() { // アロー関数から無名関数への変更
        console.log('Bye ' + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     * 
     * 以下のように使用するものとします。
     * `person.hello1s()` 
     * -> 1秒後に"hello Tom"と出力
     * 
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
    */

    // こたえ１　bindを使う方法
    // personオブジェクトの中にそのままhello1sメソッドを追加すれば良い（無名関数）
    hello1s() {
      setTimeout(this.hello.bind(this, 'hello **'), 1000); // this.hello:personオブジェクトのhelloメソッド
    },

    // こたえ2
    hello2s(){
      setTimeout(() => {
        this.hello('hello!!'); // このthisはレキシカルスコープのthisを参照する。personオブジェクトがthisの参照先となる
      }, 1000)
    },

    // こたえ3
    hello3s(){
      const _this = this; // hello3sの関数コンテキストのthisを変数に格納
      setTimeout(function(){
        _this.hello('hello~~~!!');
      }, 1000)
    }
}

person.hello1s(); // こたえ1
person.hello2s(); // こたえ2
person.hello3s(); // こたえ3


/*
自分の回答　途中
person.hello1s = {};

let hello1s = () => {
  console.log('hello' + this.name);
}
*/






/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */

//setTimeout(person.hello, 1000);

/* 自分の回答
setTimeout(function(){
  const hello = person.hello('hello');
  console.log(hello); // hello Tom
}, 1000);
*/

// こたえ
setTimeout(person.hello.bind(person, 'hello(問１の答え)'), 1000);
// setTimeOut 第一引数に関数をとる







/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
//alert(person.hello);

/*
自分の回答
setTimeout(function(){
  const alertHello = person.hello('hello');
  // alert(alertHello);  // hello Tom
}, 1000);
*/

// こたえ
//alert(person.hello('hello'));
// alert 第一引数は文字列


/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
*/

setTimeout(person.bye.bind(person), 1000);
/**
 * ↑うまくいかなかった
 * person.byeはアロー関数で定義されている
 * アロー関数はthisをとらない！！！！！！！　bindを使ってthisを束縛できない
*/

/*
自分の回答
const byeTom = person.bye.bind(person);

function fn(ref) {
  setTimeout(ref, 1000);
}

fn(byeTom);
*/