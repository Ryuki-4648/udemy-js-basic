/** 
 * チェーンメソッド
*/

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
    console.log(`${this.name} says hello ${person.name}`);
    return this; // Personのインスタンス(newで作成されたオブジェクト)を返す。bobの場合はbobのオブジェクト。
    // thisが参照するのはコンストラクター関数から作成したオブジェクトのインスタンスになる。
	}

	introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    return this;
	}

	shakeHands(person) {
    console.log(`${this.name} shake hands with ${person.name}.`);
    return this;
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
	}
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

console.log(bob); // Person {name: 'Bob', age: 23}

bob.hello(tim);
bob.introduce();
bob.shakeHands(tim);
bob.bye(tim);




// 1つのインスタンスに対して連続した処理を行う時にチェーンメソッドを使う
console.log('----- チェーンメソッドで記述 -----');
bob.hello(tim) // bob.hello(time)の実行結果がbobであれば、次につなげることができる
  .introduce()
  .shakeHands(tim)
  .bye(tim);


// bob.hello(tim)のメソッドが完了した時点での戻り値がPersonのインスタンスであればintoroduceメソッドを発見できる