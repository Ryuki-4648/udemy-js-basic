/** 
 * ビルトインオブジェクト
 * 
 * 「コード実行前」に、jsエンジンによって自動的に生成されるオブジェクト
 * ex)
 * String, Object, Number, Function, Math, Boolean, Date, Symbolなど
 * 
 * 
 *  【コンソール】
 * 「window」と入力（グローバルオブジェクト）
 * その中に含まれる、大文字から始まるものがビルトインオブジェクト
 * その多くはインスタンスを生成するためのコンストラクター関数である
 * 
 * 【コンソール】
 * 「window.Array」と入力
 * ƒ Array() { [native code] }
 * →　ビルトインオブジェクトはjsエンジンによって生成され、その中はnative code（C++で記述されたもの）になるため、中身を確認することができない
 * 
 * * built-in: はめ込みの、作りつけの、(本来)備わった、生来の
*/


const arry = new Array(1, 2, 3, 4); // newでオブジェクトの初期化。new window.Array(...)と書いているのと同じ
console.log(arry); // 配列もオブジェクトの一種。プロトタイプにはjsエンジンによって準備されたメソッドが格納されている

arry['0'] // 内部で型変換され、文字列になり、０というプロパティが存在するか確認できる
arry.hasOwnProperty(0); // コンソールで実行するとtrue
arry.hasOwnProperty(2); // コンソールで実行するとtrue
arry.hasOwnProperty(9); // コンソールで実行するとfalse。arryにはインデックスの9番目が存在しないため。