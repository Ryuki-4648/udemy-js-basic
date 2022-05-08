/**
 * コールバック関数
 * 
 * 関数は実行可能なオブジェクトである
 * →コールバック関数：他の関数に引数として渡される関数
*/


function hello(name){
  console.log('hello, ' + name);
}

function bye(){
  console.log('bye');
}

function fn(cb){
  cb('Tom'); // 実行可能なオブジェクトを実行する。
}

fn(hello); // hello関数を引数として渡している。このときに渡している関数を「コールバック関数」という
fn(bye);

// 無名関数でも可能
fn(function(name){
  console.log('hello!!' + name);
})




// よく使う場合
setTimeout(hello, 2000); // 2s経ってから表示される