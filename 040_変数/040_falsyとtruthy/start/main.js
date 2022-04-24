/**
 * falsyな値
 * Booleanで真偽値に変換した場合、falseになる値のこと
 * 
 * ex) false null undefined NaN 0 0n ""
 * 
 * 
 * truthyな値
 * ex) 上記の例以外
*/



let printBoolean = (val) => {
  console.log(Boolean(val));
}

let a = 0;
printBoolean(a);

printBoolean("");
printBoolean(NaN);
printBoolean(undefined);
printBoolean(null);


let b = parseInt(""); // から文字を整数型に変換
console.log(b); // NaN

// NaN 処理結果を数値として期待しているが、数値として表せられない場合



// 変数に値が代入されているか確認したい場合あある
// 値が設定されているか？＝　値がnull or undefined以外かどうかを確認

if(1){
  console.log('hello');
} else {
  console.log('bye');
}

// 変数がfalsyかどうか調べる
if(!b){
  console.log('hello');
} else {
  console.log('bye');
}