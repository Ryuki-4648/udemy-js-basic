/**
 * new演算子
 * 
 * コンストラクター関数から、インスタンスを作成するために使用する演算子
*/




// returnの値がオブジェクトの場合
function F(a, b){
  this.a = a;
  this.b = b;
  return {};
}
const instance = new F(1, 2);
console.log(instance); // {} 空のオブジェクトが返ってくる




// returnの値がオブジェクト以外（プリミティブ型）の場合
function F2(a, b){
  this.a = a;
  this.b = b;
  //return {};
}

F2.prototype.c = function(){} // [[Prototype]]の中にcが格納されている。return {}の場合はcというメソッドは存在しなくなる。

const instance2 = new F2(10, 20);
console.log(instance2); // F2 {a: 10, b: 20} thisに格納されたa.bを持ったオブジェクトが生成される




// new演算子を同じ動きをする関数を作成
function D(a, b){
  this.a = a;
  this.b = b;
  return {};
}

D.prototype.c = function(){}

function newOpe(C , ...args){ // 第一引数：コンストラクタ　第二引数：レストパラメーター。可変長の引数
  const _this = Object.create(C.prototype); // プロトタイプをコピーして空のオブジェクトを生成

  const result = C.apply(_this, args); // 空のオブジェクトを、コンストラクター関数を実行する際のthisとして渡す

  console.log(_this); // D{}
  console.log(args); // [1, 2] 引数で渡ってきたものが配列で表示されている
  console.log(result, _this);

  // resultがオブジェクトの場合（nullの型もobjectなので条件に入れておく）
  if( typeof result === "object" && result !== null ) {
    return result;
  }

  return _this;
}

const instance3 = newOpe(D, 1, 2);
console.log('instance3: ' + instance3);