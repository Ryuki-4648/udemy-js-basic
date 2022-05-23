/** 
 * クラス継承
 * 
 * 他のクラスのプロパティーとメソッドを継承すること
*/


// プロトタイプ継承　→　クラス表記に書き換える
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

class Japanese extends Person { // ★extends JapaneseのクラスがPersonクラスを継承する
  constructor(name, age, gender){
    super(name, age); // Personのコンストラクターが実行される
    //Person.call(this, name, age);
    this.gender = gender;
  }
  hello() {
    console.log('Konnichiwa ' + this.name);
  }
  bye() {
    console.log('Sayonara ' + this.name);
  }
}


/**  
 * 元の姿
 * Person（コンストラクター関数）
 * Personのプロトタイプにhelloが入っている。
 *
 * ↑ コンストラクター関数のJapaneseで継承している
 * Japaneseのプロトタイプに対して、Personのプロトタイプを継承している
 * 
*/

/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese(name, age, gender) {
  Person.call(this, name, age);
  this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);
プロトタイプの継承もextendsによって実行される

Japanese.prototype.hello = function() {
  console.log('Konnichiwa ' + this.name);
}

Japanese.prototype.bye = function() {
  console.log('Sayonara ' + this.name);
}
*/
const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

taro.bye();