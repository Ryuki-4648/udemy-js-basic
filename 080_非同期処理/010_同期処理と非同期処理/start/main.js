/**  
 * 
 * ブラウザとスレッド
 * 
 * ◎スレッド
 * 連続して実行される一本の処理の流れ。順番に実行される処理。
 * メインスレッド、サービスワーカー、ウェブワーカー。主にjsが実行されるのはメインスレッドになる。
 * 
 * ◎メインスレッド
 * jsの実行とレンダリング（画面描写処理）を行う。
 * 
 * ◎FPS：Flames Per Seconds
 * １秒間あたりの画面（フレーム）更新頻度。
 * 60FPSに数値が近ければ近いほど、画面がスムーズに更新される。
 * 重い処理があると、画面が更新されなくなる。がたつきやちらつきが生じる。
 * 
 * 
 * 
 * ◎同期処理
 * メインスレッドでコードが順番に実行される！！！
 * 一つの処理が完了するまで次の処理には進まない。
 * 
 * 
 * 
*/

function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});




setTimeout(function(){
  sleep(3000)
},2000) // 2秒間の間はボタンが押せる。３秒間に間に押した回数はsleep doneのあとに表示される
/*
setTimoutを使うと、第二引数で指定した秒数分メインスレッドが解放される。
setTimeoutに渡しがコールバック関数が非同期処理としてメインスレッドから切り離される。
非同期処理は一時的にメインスレッドから処理が切り離される！！！！！
一時的にメインスレッドに空きができる。
*/


//sleep(3000) // 画面更新中にボタンを数回押す　→　sleep doneのあとにbutton clickedが表示される
// sleep(3000)実行中は画面の更新・入力が待機される。




/** 
 * 非同期API
 * setTimeout
 * Promise
 * queueMicrotaskなど
 * 
 * UIイベント
 * クリック
 * 
 * NWイベント
 * I/Oイベント
 */