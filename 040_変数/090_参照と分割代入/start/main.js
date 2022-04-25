/**
 * 分割代入
 * 
 * let {a, b} = obj;
 * オブジェクトから特定のプロパティを抽出して宣言を行う
*/



// プロパティ名と変数名が一致しない場合
const hoge = {
  fuga: 10
}
let { fugafuga } = hoge; // プロパティと変数の名前は基本的に一致させること！！
console.log(fugafuga); // undefined


// どうしても名前を変えたい場合
const piyo = {
  props: 2
}
let { props: piyopiyo } = piyo;
console.log(piyopiyo); // 2




const a = {
  prop: 0
}

let { prop } = a;
prop = 1;
console.log(a, prop); // 0 1

function fn({ prop }){ // 特定のプロパティのみ使用したい場合。渡ってきたオブジェクトがこの時点で分割代入で展開される
  prop = 1; 
  console.log(a, prop); // 0 1
}
fn(a);




// オブジェクトが多階層だった場合

const c = {
  prop1: {
    prop2: 0
  }
}

let { prop1 } = c;
console.log(prop1); // prop2: 0

prop1.prop2 = 1;
console.log(c, prop1);
// cのprop1も1に変更されている

// オブジェクトの参照を保持しているため、分割代入元のオブジェクトにも影響が出る