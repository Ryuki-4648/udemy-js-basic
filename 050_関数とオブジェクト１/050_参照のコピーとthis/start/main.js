window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a(); // Hello Johnとなる
        const person = {
          name: 'Tim',
          hello: function() {
              console.log('Hello ' + this.name); // オブジェクトのメソッド：呼び出し元のオブジェクトが取得される
              a(); // Hello Johnとなる。関数として実行：ウィンドウオブジェクトが取得される
          }
        }
        person.hello();
    }
}


// コピーする場合動きが変わる
//const ref = person.hello;
//ref(); // Hello　になる。window.name = 'John';にするとHello Johnと表示される

person.hello();



/**
 * 
 * person
 * hello →　functinon　→　function(オブジェクトへの参照がコピーされる)
 * name　→　'Tom'            ↑ref
 * 
 * 直接refから関数を呼び出している
 * 呼び出し元のオブジェクトがpersonではなくなるので、this.nameが取れない
*/


/**
 * オブジェクトのメソッド　として実行される場合
 * 'this' => 呼び出し元オブジェクト
 * 
 * 関数　として実行される場合
 * 'this' => グローバルオブジェクト
*/



function a (){
  console.log('Hello ' + this.name); // 関数の中でthisを呼んだ場合：ウィンドウオブジェクトを参照する
}