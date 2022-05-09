window.name = 'John';

const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name);
  }
}
person.hello();




// person.hello()をコールバック関数として、他の関数の引数に与えた場合どうなるか？

function fn(ref) {
  ref(); // 関数として実行されている this -> グローバルオブジェクト
}
// personのhelloプロパティが参照している先の関数がrefに渡される

fn(person.hello); // Hello Johnになる！！
// メソッドと他の変数に代入しているのと同じ！！！

// オブジェクトのメソッドを引数で渡した段階で関数になる