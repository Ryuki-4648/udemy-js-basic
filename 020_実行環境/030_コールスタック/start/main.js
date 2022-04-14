function a() {
  console.log('function a');
}
function b() {
  a();
  console.log('function b');
}
function c() {
  b();
  console.log('function c');
}
c();

/**
 * コールスタック
 * a
 * b
 * c
 * グローバル
 * 
 * と言うふうに積まれていく
 */

/**
 * 後から積み重なったものが一番最初に消滅するスタックの仕組み
 * 後入れ先だし　LIFO Last In, First Outという。
 */
