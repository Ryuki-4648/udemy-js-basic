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
    console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
const call = bob.hello();
setTimeout(call, 1000);

console.log(bob); // Person {name: 'Bob', age: 23}
console.log(bob.hello);
/**
 *  ƒ hello(name) {
      console.log('hello ' + this.name);
    }
 */