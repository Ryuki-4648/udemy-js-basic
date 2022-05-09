/**
 * アロー関数
 * 
 * 無名関数を記述しやすくした省略記法
*/


// 一般的な関数宣言
function a(name){
  return 'hello' + name;
}

// 関数式
const b = function(name){
  return 'hello' + name;
}

// アロー関数
const c = (name) => {
  return 'hello' + name;
}

// 引数が一つの場合は()を省略できる
const d = name => {
  return 'hello' + name;
}

// 実行行が1行の場合、{}とreturnが省略できる
const e = name => 'hello ' + name;


// 実行
console.log(e('Tom'));


// 引数が複数の場合
const f = (name, name1) => 'hello ' + name + ' and ' + name1;
console.log(f('Bob', 'Mike'));


// 引数がない場合、()は省略できない
const g = () => 'hello';


// アンダースコアでダミーの変数を定義する方法
const h = _ => 'hello';
console.log(h());




/**
 * アロー関数が無名関数と異なる点
 * 
 * ・this,argumentsという値をアロー関数内で保持しない
 * ・newで初期化できない
*/