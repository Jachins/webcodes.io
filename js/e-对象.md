**对象就是一组没有特定顺序的值，对象的每个属性或者方法都由一个名称来标识，这个名称映射到一个值**
#### 1. 属性的类型(2种)
- **数据属性**：保存数据值的位置
    - [\[Configurable]]:表示是否剋通过delete删除并重新定义，是否可以修改它的特性，以及是否可以把它改成访问器属性；该属性默认为true;
    - [\[Enumberable]]:表示属性是否可以通过for-in循环返回，默认情况下为true;
    - [\[Writable]]:表示属性的值是否可以被修改，默认为true;
    - [\[Value]]:包含属性实际的值，默认为undefined；

- 要修改默认属性，需要使用Object.defineProperty()方法，这个方法接收3个参数：要**给添加属性的对象**、**属性的名称**和一个描述符对象(configurable,enumberable,writable,value)。
```
    let person={};
    Object.definePropery={
        person,"name",{
            writable:false,
            value:"jachin"
        }
    };
    console.log(person.name);//jachin
    person.name="qiqi";
    console.log(person.name);//jachin,因为writable设置为false,属性为只读；
```
- **访问器属性**：不包含数据值，相反，本身还包含一个获取(getter)和设置(setter)函数，非必须的这两个函数
    - [\[Get]]:获取函数，在读取属性时调用，默认值为undefined;
    - [\[Set]]:设置函数，在写入属性时调用，默认值为undefined；
- 访问器属性也不能直接定义，需要使用Object.defineProperty(),
```
    let book={
        year_:2020,
        edition:1
    };
    Object.defineProperty(book,"year",{
        get(){
            return this.year_;
        },
        set(newValue){
            if(newValue>2020){
                this.year_=newValue;
                this.edition +=newValue-2020;
            }
        }
    });
```

#### 2. 合并对象
- Object.assign():接收一个目标对象和一个或多个源对象作为参数，然后将每个源对象可枚举(Object.propertyIsEnmerable()返回true)和自有的(Object.hasOwnProperty()返回true)属性复制到目标对象；
- 其中，源对象：[\[Get]]获取属性的值(实际上时对每个源对象进行浅复制)    ,目标对象：[\[Set]]设置属性的值

#### 3. 增强的对象语法
- 1. 属性值简写；
- 2. 可计算属性(在对象字面量中动态赋值)：中括号包围的对象属性键告诉运行时将其当作JavaScript表达式而不是字符串来求值；
- 3. 简写方法名；

#### 4. 对象解构
- 对象解构就是使用与对象匹配的结构来实现对象属性赋值;
- 1. 让变量直接使用属性的名称，可以使用简写语法；
```
    let person={
        name='jachin',
        age=22
    };
    let {name,age}=person;
    console.log(name);
    console.log(age);
```
- 2. 在解构赋值的同时定义默认值：
```
    let {name,job="softWare engineer"}=person;
    console.log(job);
```
 