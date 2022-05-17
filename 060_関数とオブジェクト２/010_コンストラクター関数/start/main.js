/**
 * コンストラクター関数
 * 
 * 新しくオブジェクトを生成するための「雛形」となる関数
 * 
 * new演算子を使う
 * newでオブジェクト作成する＝インスタンス化
 * newで作成されたオブジェクト＝インスタンス
*/


function Person(name, age){
  this.name = name; // new演算子でインスタンス化した際、thisに続くnamepプロパティ、ageプロパティを持ったオブジェクトが生成される
  this.age = age;
}

// bobというオブジェクトが、コンストラクター関数のインスタンス化によって生成される
const bob = new Person('Bob', 18);

const tom = new Person('Tom', 33);
const sun = new Person('Sun', 46);
// consoleで「bob」と試しに書くと、オブジェクトが生成されていることがわかる