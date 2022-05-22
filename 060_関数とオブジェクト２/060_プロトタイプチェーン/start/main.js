/**
 * プロトタイプチェーン
 * 
 * プロトタイプの「多重形成」のこと。
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log('OwnProperty: hello ' + this.name); // 優先度1　自身のプロパティ
  }
}

Person.prototype.hello = function() {
  console.log('Person: hello ' + this.name); // 優先度２　自身が持ってるプロパティのメソッド
}

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name); // 優先度３　全てのオブジェクトはObjectのプロトタイプから始まっているので、ここでなければundefinedとなる
}



const bob = new Person('Bob', 18); // new Personによって、Personのコンストラクター関数から、bobがインスタンス化されている。bobというオブジェクトが生成される。
bob.hello();
/**
 * 開発者ツールで「bob」と打つと
 * 
 * age: 18
  name: "Bob"
  [[Prototype]]: Object
  　→さらに中を開くと　[[Prototype]]: Object　がある。

  [[Prototype]]（動画では__proto__）が多階層で重なっている＝プロトタイプチェーン
  →多階層の場合、階層の浅いものから呼び出されていく。
  はじめはPerson自身のプロパティを探しにいく。そこでhelloメソッドがない場合、次の階層にhelloを探しにいく。
*/　

const result = bob.hasOwnProperty('name'); // 自身にプロパティの名前が存在するかどうか。今回はthisとageがあてはまる
console.log(result); // nameがあるか？　結果true
// オブジェクトのメソッドが使いまわせ、メモリの効率化につながる！！