/**
 * bind
 * 
 * bindによって、thisや引数を「固定」した新しい関数を作成することができる
 * →bindによるthisの束縛
*/


//fn(person.hello);でHello JohnとなるのをHello Tomにする

window.name = 'John';

const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name);
  }
}
person.hello();

const helloTom = person.hello.bind(person);
// bindの第一引数で渡したオブジェクトを、helloの中で実行されるthisの参照先として設定。
// その設定した関数を新しい関数としてhelloTomに返却している

function fn(ref) {
    ref();
}

//fn(person.hello);
fn(helloTom); // Hello John








function a(){
  console.log('Hello ' + this.name);
}

const b = a.bind({name: 'Tim'});

b();






function a2(name){
  console.log('Hello ' + name);
}

const b2 = a2.bind(null, 'Tim'); // 関数内でthisが使われていない場合は第一引数の設定は必要ない

b2();
b2('Mike'); // bindが優先されるのでHello Timとなる