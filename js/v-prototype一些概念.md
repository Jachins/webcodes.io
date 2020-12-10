#### __proto__和prototype的几个注意点：

- 每个对象都具有一个名为__proto__的属性；

- 每个对象的__proto__属性都指向自身构造函数的prototype；

- 对象不具有prototype属性，只有属性才有prototype属性

- 每个JS对象对应一个原型对象，并从原型对象继承属性和方法；

- Object.prototype.__proto__===null,说明原型链到Object.prototype终止；

- Function.prototype.__proto__.__proto__===null,结果为true；