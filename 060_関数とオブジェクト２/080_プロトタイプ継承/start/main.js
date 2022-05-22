/**
 * ◎プロトタイプ継承
 * 別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること。
 * コンストラクター間で機能の受け渡しが行える。
 * 
 * 
 * ◎継承
 * 別のコンストラクター関数を受け継ぐこと。
*/



function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}


function Japanese(name, age, gender){
  Person.call(this, name, age); // this.nameとthis.ageが設定される

  this.gender = gender; // Japaneseにのみプロパティを追加
}

Japanese.prototype = Object.create(Person.prototype); // Personのプロトタイプが、Japaneseのプロトタイプの中に含まれるプロトタイプとなる
/**
 * コンソールに　Japanese.prototype　を入力　→　Person {}
 * 
 * Object.create(Person.prototype);
 * →　第一引数に渡したオブジェクトをプロパティに持つ、空のオブジェクトを生成（Person {}）
 * Person {}の中の[[Prototype]]がPersonのプロトタイプとなる
*/


// 上書き。Personのプロトタイプとは別に、独立してJapaneseのプロトタイプが存在する。
Japanese.prototype.hello = function() {
  console.log('hello(上書きしたパターン) ' + this.name);
}

// Japaneseのプロトタイプのみメソッドを追加
Japanese.prototype.bye = function() {
  console.log('bye ' + this.name); // 継承元のPersonにはhelloしかない。
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro); // Japanese {name: 'Taro', age: 23}

taro.hello(); // hello Taro
taro.bye(); // bye Taro













/**
 * コピーして流用する場合。記述が長くなる、修正しにくい。
 * function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}
 */