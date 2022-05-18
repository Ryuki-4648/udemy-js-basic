/**
 * proyotype
 * 
 * オブジェクトに存在する特別なプロパティー
 * コンストラクター関数と合わせて使用する
 * 
*/


function Person(name, age) {
  this.name = name;
  this.age = age;
}


Person.prototype.hello = function(){
  console.log('hello ' + this.name);
}
// ドット記法でプロトタイプというプロパティを追加。
// helloメソッドを追加したいので、.helloというプロパティを定義し、無名関数を代入する


const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello(); // hello Bob
tom.hello(); // hello Tom
// メソッドとして追加したいプロパティを、プロトタイプオブジェクトに格納しておくと、インスタンスごとにメソッドを実行できる

/**
 * 
 * 開発者ツールのSourcesで確認
 * 
 * Watchに「bob」と入れると、
 * age: 18
 * name: "Bob"
 * __proto__ : Object
 * と出力される。
 * 
 * __proto__のオブジェクトの中身→　hello: ƒ ()
 * 
 * 
 * プロトタイプオブジェクトに追加すると、__proto__ に参照がコピーされる
 * 実態のオブジェクトは「同じ」になる！！
*/


// 比較
console.log(Person.prototype === bob.__proto__); // true





// Personのthisに対してhello関数を登録する場合
function Person2(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function(){
    console.log('hello!! '+ this.name);
  }
}

const bob2 = new Person2('Bob', 18);
const tom2 = new Person2('Tom', 33);
const sun2 = new Person2('Sun', 20);


bob2.hello(); // hello!! Bob
tom2.hello(); // hello!! Tom


/**
 * プロトタイプを使わない場合
 * インスタンス生成のたびhelloメソッドを追加する必要があり、余分なメモリを消費してしまう
 * 
 * プロトタイプを使う場合
 * プロトタイプオブジェクトの参照だけをコピー
 * →　各インスタンスに渡すのはオブジェクトの参照になるので、参照先は全て一致することになる
 * 効率良くプログラムを動かすことができる
*/


// ★★★インスタンス化した際には、「prototypeの参照」が「__proto__」にコピーされる！！！！！