/**
 * OR条件の使い方　応用編 
**/

function hello(name){
  // nameの入力がない場合。nameがfalsyの場合に実行する
  if(!name) {
    name = 'Tom';
  }

  console.log('Hello, ' + name);
}

hello();
hello('Bob');


// 簡略化した記述
function hello02(name02) {
  name02 = name02 || 'Brown'; // 値がfalsyの場合には Brown が返ってくる。truthlyの場合には値にMikeが入る。
  console.log('Goodmorning, ' + name02);
}

hello02();
hello02('Mike');
hello02(0); // falsyな値となり、Brownが返ってくる



// より簡略化した記述
function hello03(name03 = 'Green') {
  console.log('Bye, ' + name03);
}
hello03();
hello03('White');


console.log('--------- AND条件 ----------');





/**
 * AND条件の使い方　応用編 
**/

hello();

let name = 'Bob';
name && hello(name);
// nameがtruthlyな場合、次の値に処理が移る
// let name = 'Bob'を削除し、nameがfalsyになると、上にあるhello()が実行される