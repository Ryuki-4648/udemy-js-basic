/** 
 * call,applyとthisの関係について
 * 
 * 
 * bindとの違い　
 * 
 * bind（メソッド）
 * thisや引数の参照先を変更。使用時点で「実行されない」。
 * thisや引数を固定して新しい関数を作成する！！
 * 
 * call, apply（メソッド）
 * thisや引数の参照先を変更。同時に関数を「実行する」
*/

function a() {
  console.log('hello ' + this.name);
  console.log(this); // this:windowオブジェクトを指す
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

a.apply(tim);

a.call(tim);



console.log('---------- apply,call ----------');

// applyとcallの違い

console.log('---------- call ----------');

// call
function a2(name, name1) {
  console.log('hello ' + name);
}

a2.apply(tim ,['Tim']); // 配列

a2.call(tim, 'Tim!!'); // 第二引数以下は関数の引数（仮引数）を定義することができる


console.log('---------- apply ----------');

// apply
function a3(name, name1) { // 配列が展開され、順番に引数に渡されていく
  console.log('hello ' + name + ' ' + name1);
}

a3.apply(tim ,['Tim', 'Bob']); // 配列を設定する
a3.call(tim, 'Tim', 'Mike');




console.log('---------- applyの実践的な使用法（ES6になるまで） ----------');


// applyの実践的な使用法。
//配列の中から一番大きな数字を取り出したいとする。

const arry = [1, 2, 3, 4, 5];

Math.max(1,2); // 2

const result = Math.max.apply(null, arry); // 引数として一つずつ渡してあげる。this設定しなくていいのでnull
console.log(result);




console.log('---------- スプレッド演算子（ES6〜） ----------');

// スプレッド演算子
const arry2 = [1, 2, 3, 4, 5];
const result2 = Math.max(...arry2); // 配列を展開してmaxの引数として一つずつ渡していく
console.log(result2);