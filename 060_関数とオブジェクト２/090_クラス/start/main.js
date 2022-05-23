/** 
 * クラス
 * 
 * コンストラクター関数を、クラス表記でかけるようにしたもの
 * すでにあるものを簡単に描けるようにしたもの　→　シンタックスシュガー　という
*/


// コンストラクターをクラスに書き換える
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

// インスタンス化してオブジェクトを生成する（newでオブジェクト作成する）
const bob = new Person('Bob', 23);
console.log(bob);
// インスタンス化されたものはオブジェクトとなる



/*
元の姿。裏側の仕組み。
コンストラクター関数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

プロトタイプ（オブジェクトに存在する特別なプロパティー。コンストラクター関数と合わせて使用する）
Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}
*/