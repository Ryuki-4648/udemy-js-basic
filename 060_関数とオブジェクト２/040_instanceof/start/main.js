/**
 * instanceofメソッド
 * 
 * どのコンストラクターから生成されたオブジェクトかを確認する
*/


 // 関数Fがコンストラクターとして定義されている
function F(a, b) {
  this.a = a;
  this.b = b;
  return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1, 2);
console.log(instance);


// インスタンスがどのコンストラクターから生成されたのか？
console.log(instance instanceof F);
// return {a: 1}をコメントアウトしている場合はtrue,そうでない場合はfalseになる！！


console.log(instance._proto_ === F.prototype);
// protoとFのプロトタイププロパティの等価性は？　→　false






// オブジェクトリテラルを省略せずに書くと
function D(a, b) {
  this.a = a;
  this.b = b;
  const result = new Object(); // オブジェクトのコンストラクターからインスタンス化を行う
  result.a = 1; // resultに対してaというプロパティを追加する
  return result; // 関数Fの結果：new Object();で生成されたインスタンスが返ってくる
}

D.prototype.c = function() {}

const instance2 = new D(1, 2);
console.log(instance2);
console.log(instance2 instanceof D);
console.log(instance2._proto_ === Object.prototype); // instance2のprotoが参照しているのはObjectのプロトタイプ





// 渡ってきたインスタンスの種類によって処理を切り替える
function fn(arg){

  if(arg instanceof Array) {
    arg.push('value'); // 配列が渡る場合
  } else {
    arg['key'] = 'value'; // オブジェクト渡る場合
  }
  console.log(arg);
}

fn({}) // {key: 'value'}
fn([]) // ['value']



/**
 * まとめ
 * 
 * instanceofを使ってコンストラクターを確認できる
 * inctanceofは内部ではプロトタイプの参照先が同じかどうかを確認する
 * （returnでオブジェクトを返した場合は異なる）
 */