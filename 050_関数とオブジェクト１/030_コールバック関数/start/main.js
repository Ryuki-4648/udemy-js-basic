/**
 * コールバック関数
 * 
 * 関数は実行可能なオブジェクトである
 * →コールバック関数：他の関数に引数として渡される関数
*/


function hello(){
  console.log('hello');
}

function bye(){
  console.log('bye');
}

function fn(cb){
  cb(); // 実行可能なオブジェクトを実行する
}

fn(hello); // hello関数を引数として渡している。このときに渡している関数を「コールバック関数」という
fn(bye);