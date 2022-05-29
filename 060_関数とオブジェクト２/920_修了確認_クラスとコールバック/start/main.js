/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(this); // windowオブジェクト　
    console.log('hello ' + this.name); // windowオブジェクトのnameプロパティをhelloのあとに探しにいくが、見つからない
  }
}

const bob = new Person('Bob', 23);
const call = bob.hello();
setTimeout(call, 1000); // 結果1秒後にhelloだけ出力される

console.log(bob); // Person {name: 'Bob', age: 23}　→　prototypeの中にhello: ƒ hello()
console.log(bob.hello); // helloが参照している先の関数が実行されることになり、オブジェクトからのメソッドの呼び出しとはならない。
/**
 *  ƒ hello(name) {
      console.log('hello ' + this.name);
    }
*/



// 回答1
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

const bob2 = new Person2('Bob', 23);
setTimeout(bob2.hello.bind(bob), 1000); // bobをhello内のthisとして束縛する

// 回答2
setTimeout(function(){
  bob.hello(); // bobオブジェクトから呼び出されたhelloメソッドが実行されていることになる
}, 1000);


console.log(bob.hello === Person.prototype.hello); // true