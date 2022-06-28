/**  
 * タスクキューとコールスタック
 * 
 * ◎タスクキュー
 * 実行待ちの非同期処理の行列
 * 非同期処理の実行順を管理。
 * 
 * キューの仕組みを先入れ先出し＝FIFO（First IN, First Out）という。
 * キューに入ってきたものから順に処理する。
*/


const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
  console.log('task2 done');
});

function a() {
  setTimeout(function task1() {
    console.log('task1 done');
  }, 4000);

  const startTime = new Date();
  while (new Date() - startTime < 5000); // 2秒間メインスレッドを占有する処理

  console.log('fn a done');
}


a();

/**
 * 画面更新中にボタンをクリック
 * 
 * fn a done
  task2 done
  task1 done
  の順番で表示される

  タスクキューに入った処理（タスク）が非同期で実行される。

  メインスレッドが占有されている状態　＝　コールスタックにコンテキストが積まれている状態！！！！！！
  コールスタックのコンテキストがはけるまでは、タスクキューに入っているタスクは処理されない！！！！！
*/