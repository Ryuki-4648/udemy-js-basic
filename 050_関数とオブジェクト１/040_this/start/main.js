/** 
 * this 
 * 
 * 関数コンテキスト
 * thisはjavascriptエンジンによって設定され、関数内で使うことができる
 * 実行コンテキストによって、thisの参照先は異なる。一般的には関数コンテキストによってthisの参照先が変わることが多い。
 * 
 * 「呼び出し元のオブジェクト」への参照を保持するキーワードのこと
* */


// thisの使用例
const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name); // thisがオブジェクトのpersonを参照する
  }
}

person.hello();