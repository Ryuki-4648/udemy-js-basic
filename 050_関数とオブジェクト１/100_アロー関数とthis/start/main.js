window.name = 'John';

// personオブジェクト
const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name); // ここでのthisはpersonを参照している
  }
}
person.hello(); // hello Tom



const person2 = {
  name: 'Bob',
  hello: () => {
    console.log('Hello ' + this.name);
  }
}
person2.hello(); // hello John

/**
 * person2オブジェクトは、グローバルコンテキストに定義されているため、
 * グローバルコンテキストのthisの参照先はwindowオブジェクトになる
 * 
 * アロー関数はthisをとらない！！！
 * thisがないため、スコープチェーンをたどり、外側のレキシカルスコープに探しにいく　→　windowオブジェクトを見つける
 * 
 * 
 * コンテキスト内でthisを取らないため、呼び出し元がオブジェクトであったとしても、そのコンテキストのthisは無視される
*/


console.log('----- アロー関数をオブジェクトのメソッドの中で呼び出す -----');

const a = () => {
  console.log('Bye ' + this.name); // この関数のレキシカルスコープはグローバルスコープになる。thisはwindowオブジェクトとなる
}

const person3 = {
  name: 'Green',
  hello() { // 無名関数として定義
    console.log('Hello ' + this.name); // Hello Green
    const hoge = () => {
      console.log('Bye ' + this.name);
    }
    a(); // Bye John
    hoge(); // Bye Green
  }
}

person3.hello();
/**
 * この式よりも下に　const aを持っていくと、
 * Uncaught ReferenceError: Cannot access 'a' before initializationのエラーが出る
 * 
 * メソッドの呼び出しの後に関数が宣言され、変数aが存在しない状態になるため
*/






function b(){
  const e = () => {
    console.log('Bye ' + this.name); // eのレキシカルスコープはどこ？レキシカルスコープはオブジェクトから呼び出し？関数として実行されている？
  }
  e();
}

b(); // Bye John

/**
 * const eのレキシカルスコープはfunction bの関数スコープとなる
 * function bはただ呼び出されただけ
 * function bのthisはwindowオブジェクトを指すことになるため、this.name は「John」となる
*/