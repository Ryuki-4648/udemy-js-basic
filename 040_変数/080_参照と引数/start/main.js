function fn(hoge) {

}
let fuga = 0;
fn(fuga);
// これは　let hoge = fuga;と同じ
// hogeにはfugaの変数が参照している先の値orオブジェクト









let a = 0;

function fn1(arg1){
  arg1 = 1;
  console.log(a, arg1); // 0 1
}

/**
 * function fn1(0が入ってくる) {
 *  arg1 = 1;
 *  console.log(a, arg1); ここのaはレキシカルスコープに存在するため、let a = 0のaを参照している
 * }
 * 
 * 間でこの記述が入っているのと同じ
 * let arg1 = a;
 * arg1 = 1;
 * console.log(a, arg1);
*/

fn1(a);


/**
 * fn1(arg1)にはaの値「0」が渡される
 * そのあと1に変更されている
 * 
 * console.log(a, arg1);
 * arg1=1
 * aはレキシカルスコープに存在するため、let a = 0;の値を参照している。
*/




let b = {
  prop: 0
}

function fn2(arg2){
  arg2.prop = 1;
  console.log(b, arg2); // prop:1 prop:1
}

fn2(b);
/**
 * 引数に渡したbというオブジェクトの参照が、arg2にコピーされる
 * このarg2はlet b = {prop:0}のbと同じオブジェクトへの実態を保持している
 * arg2.prop = 1でプロパティを変更すると、bにも影響が出る
 * 
 */



function fn3(arg2){
  arg2 = {};
  console.log(b, arg2); // prop:0 {}
}

fn3(b);