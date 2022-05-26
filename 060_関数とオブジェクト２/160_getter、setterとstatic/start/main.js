/** 
 * getter/setter static
 * 
 * ディスクリプターほかにはset,get(オプションとなるので設定されないとundefinedとなる)
*/


// Person1のコンストラクター
function Person1(name, age) {
	this.name = name;
	this.age = age;
}


Person1.hello = function(){
  console.log('Person1 good morning');
}
Person1.hello();


Object.defineProperty(Person1.prototype, 'name', {
  get: function(){ // getが呼ばれたときの動作を記述
    console.log('Hello');
    return this._name;
  },
  set: function(val){
    this._name= val;
    console.log('hoge');
  }
});

const p1 = new Person1('Bob', 23);
console.log(p1.name); // HelloとBob

p1.name = 'Tom';
console.log(p1.name); // Tom




// classで簡略化
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name(){ 
    console.log('Hello');
    return this._name;
  }
  set name(val){
    this._name= val;
  }

  // 静的なメソッドを定義する場合のキーワードstatic
  static hello(){
    console.log('Person2 hello!!!') // staticメソッドの中でthisは使用不可
  }
}

const p2 = new Person2('Mike', 40);
console.log(p2);

Person2.hello(); // Person2 hello!!!
// インスタンス化せずに使用できるメソッド　＝　静的メソッド、スタティックメソッド
// インスタンス化されてないので、オブジェクトは生成されない