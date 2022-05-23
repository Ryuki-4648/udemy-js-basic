/**  
 * super
 * 
 * 関数コンテキスト内で使用できる。（argumentsやthisも同様）
 * 使用条件はかなり限られる。
 * 
 * 継承元の関数を呼び出すためのキーワード。
 * 
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}


 // Personのコンストラクターを呼び出す
class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender; // super(name, age);より前に持っていくとエラーになる
  }

  // 親のメソッドを呼び出す
  hello() {
    super.hello(); // Personのhelloメソッドを呼んでいる
    console.log('Konnichiwa ' + this.name);
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

taro.hello();
taro.bye();




console.log('----- オブジェクトの場合 -----');

// オブジェクトリテラル（{}で始まるオブジェクトの初期化）の中でsuperを使用する
const american = {
  hello() {
    console.log('hello(american) ' + this.name);
  }
}

const bob = {
  name: 'Bob',
  hello() {
    //console.log('hello(bob) ' + this.name);
    super.hello();
  }
}

/*
オブジェクトリテラル内でしかsuperは使えない！
superはクラスの中で使用されるもの！！
以下は文法エラーとなる
bob.bye = function(){
  super.hello();
}
*/

// bobオブジェクトに対し、americanをプロトタイプとして追加する
// 第一引数：オブジェクト　第二引数：継承させたいオブジェクト
Object.setPrototypeOf(bob, american);

bob.hello();
