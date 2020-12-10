### 1. Object
**显示创建Object对象的方法有两种：**
> 1. 使用new操作符和Object构造函数：
```
    let person=new Object();
    person.name="jachin";
    person.age=29;
``` 
> 2. 使用对象字面量表示法(对象定义的简写形式)，目的：为了简化包含大量属性的对象的创建;
```
    let person={
        name:"jachin",
        age:29
    };
```
### 2.Array
>**1. 创建数组**

> ①：使用Array构造函数(可以省略new),同时ES6中新增了两种用于创建数组的静态方法from()和of();
```
    1. 直接使用Array():let color=new Array();
    2. 知道数组元素的数量：let color= new Array(20);
    3. 给Array()传入要保存的元素:let color=new Array("red","green","blue");
    4. from()用于将类结构转换为数组实例：console.log(Array.from("Matt"));//["M","a","t","t"];
    5. of()用于将一组参数转换为数组实例:console.log(Array.of(1,2,3,4));//[1,2,3,4];
```   
>②：使用数组字面量(array literal):在中括号中包含以逗号分隔的元素列表；
```
如：let name=["jachin","chuqi","green","blue"]

```

>**2. 数组空位**
>在使用字面量初始化数组的时候，可以用一串逗号来创建空位(hole);ES6将这些空位当成存在的元素，赋值为undefined；

>**3. 数组索引**
>数组最多包含4294967295个元素；

>**4. 检测数组**
>使用instanceof
```
    if(value instanceof Array){
        <!-- 操作数组 -->
    }
```
>**5.迭代器方法**
>原型上三个用于检索数组内容的方法：keys()方法，values()方法，entries();
```
    const a=['foo','bar','so','green'];
    <!-- 先用Array.from()转变为数组实例 -->
    keys():返回数组索引的迭代器:console.log(Array.form(a.keys());//[0,1,2,3];
    values():返回数组元素的迭代器；console.log(Array.from(a.values());//['foo','bar','so','green']
    entries():返回索引值/的迭代器;console.log(Array.from((a.entries())));//[[0,'foo'],[1,'bar'],,,,]

```

>**6. 复制和填充方法：不会改变数组的大小**
> 批量复制方法copyWithin():按照指定范围浅复制数组中的部分内容，然后插入到指定的索引开始的位置；
```
    let ints,reset=()=>ints=[1,2,3,4,5,6];
    1. 从ints中复制索引0开始的内容，插入到索引2开始的位置
    ints.copywithin(2);//[1,2,1,2,3,4]

    2. 从ints中复制索引2开始的内容，插入到索引0开始的位置
    ints.copyWithin(2);//[3,4,5,6,5,6]

    3. 从ints中复制索引0开始到索引3结束的内容,插入到索引3开始的位置
    ints.copyWithin(3,0,3);//[1,2,3,1,2,3];
> *copyWithin()会自动忽略超出数组边界，零长度以及索引方向相反的索引范围*
```


> 填充数组方法fill():向一个已有的数组中插入全部或者部分相同的值，开始索引用于指定开始填充的位置，如果没有指定结束索引，则一直填充到数组末尾，负值索引从数组末尾开始计算；
```
    const test1=[0,0,0,0,0,0];
    1.用1填充整个数组
    test1.fill(5);

    2.用2填充索引值大于等于2的元素；
    test1.fill(2,2);//[0,0,2,2,2,2];

    3. 用4填充索引值大于等于2小于4的元素；
    test1.fill(4,2,4);//[0,0,4,2,2,2]
```
>*fill()自动忽略超出数组边界，零长度以及索引方向相反的索引范围*

>**7. 转换方法**
>
- toLocaleString():返回对象的字符串表示，该字符串反映对象所在的本地化执行环境
- toString():返回由数组中的每个值等效字符串拼接而成的一个逗号隔开的字符串；
- valueOf():返回数组本身的内容；
- join("参数"):得到以传入参数为分隔符的字符串；

>**8. 栈方法**
> 
- 数组提供了类似栈的方法，后进先出(LIFO),提供了push()推入和pop()弹出；
- push():将元素添加到数组末尾，并返回数组的最新长度；
- pop():删除数组的最后一项，同时减少数组的长度，并返回删除的元素；

>**9. 队列方法**
> 
- shift():删除数组的第一项并返回它，数组长度减一；
- unshift(...items):在数组开头添加任意多个值，然后返回最新长度；
- push():将元素添加到数组末尾，并返回数组的最新长度；

>**10. 排序方法**
>
- reverse():将数组元素反向排列；
```
    let value=[1,2,3,4,5];
    value.reverse();//value=[5,4,3,2,1];
```
- sort():按照升序重新排列数组元素，即小在前，大在后；需要借助一个比较函数作为参数；
```
    funciton compare(value1,value2){
        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    }
```
```
    let value=[1,8,2,3,5];
    value.sort(compare);//value==[1,2,3,5,8];
     改成箭头函数：value.sort((a,b)=>a<b?1:a>b?-1:0);
```
>**11. 操作方法**
>
 - splice():在数组中间插入元素,*都会返回一个删除元素组成的数组* 
        删除：splcie(要删除第一个元素的位置，要删除元素的数量)
        插入：splice(开始位置，0(删除元素的数量)，要插入的元素)
        替换：splice(开始位置，就要删除元素的数量，插入的任意多个元素)
        ===========================================================
         
- slice():创建一个包含原有数组中的一个或者多个元素的新数组
        slice()接收两个参数，返回元素的开始索引值和结束索引值
        如果只有一个参数，则返回该参数索引值到数组末尾结束的值；
-  注意：如果有负值，则以数组的长度的加上这个负值的出来的结果确定位置；

>**12.搜索和位置方法**
> ***提供了两种搜索数组的方法：按严格相等搜索和断言函数搜索***
>1. 按严格相等搜索：indexOf(),lastIndexOf()和includes():都只是接收两个参数，要查找的元素和一个可选的起始搜索位置；---------严格相等，所以必须使用全等(===),严格相等;
- indexOf()和lastIndex():都返回要查找元素在数组中的位置，如果没有找到则返回-1;
- includes():返回一个布尔值，表示是否至少找到一个与指定元素匹配的项;

> 2. 断言函数：接收三个参数(元素、索引值、数组本身)
- 其中，元素是数组中当前选中的元素，索引值是当前元素所在的索引值，数组是正在搜索的数组；
1. find():从数组的最小索引开始,返回第一个匹配到的元素；
2. findIndex():返回第一个匹配元素的索引;
- 这两个方法也都接收了第二个可选的参数，用于指定断言函数内部的this的值;
```
    const people[
        {
            name:'jachin',
            age:22
        },{
            name:'wangle',
            age:29
        }
    ];
    console.log(people.find((element,index,array)=>element.age<28));//{name:'jachin',age:22};

    console.log(people.findIndex((element,index,array)=>element.age<28));//0
```
>**13.迭代方法(传给每个方法的函数有三个参数：数组元素、元素索引值和数组本身)**

 1. every():对数组每一项都运行传入的函数，如果对每一项函数都返回true,则这个方法返回true；
    
 2. some():对数组每一项都运行传入的函数，如果有一项函数返回true,则这个方法就返回true;
    
 3. filter():对数组每一项都运行传入的函数，函数返回true的项都会组成数组返回；
    
 4. forEach():对数组每一项都运行传入的函数，没有返回值，直接执行某些操作，相当于for循环遍历数组；
    
 5. map(func):对数组每一项都运行传入的函数，返回由每次函数调用的结果构成数组。
```
        const value = arr.map(item => item * 3)
```

>**14. 归并方法**
    reduce()和reduceRight():分别是从数组第一项遍历到最后一项和从数组最后一项遍历回到第一项；
```
    let values=[1,2,3,4,5];
    let sum=values.reduce((prev,cur,index,array)=>prev+cur};
    alter(sum)//15s
```
### 3.定型数组
1. 目的：提升像原生库传输数据的效率;

#### 1.ArrayBuffer()
1. 作用：可用于在内存中分配特定数量的字节空间；
2. 限制：ArrayBuffer()一旦创建就不能修改大小
```
    const buf=new ArrayBuffer(16);//buf.byteLength=16;
```
3. ArrayBuffer()与C++中的malloc()的区别：
    - malloc()再分配失败时会返回一个null指针，ArrayBuffer在分配失败时会抛出错误;
    - malloc()可以利用虚拟内存，最大的内存分配尺寸只受限于寻址系统内存限制；ArrayBuffer()分配的内存不能超过Number.MAX_SAFE_INTEGER(2^53-1)字节。
    - malloc()调用成功不会初始化实际的地址；声明ArrayBuffer()会将所有二进制初始化为0；
    - 通过malloc()分配的堆内存除非调用free()或者程序退出，否则系统不能再使用。通过声明ArrayBuffer()分配的堆内存可以当成垃圾回收，不用手动释放。

### 4.Map
- 一种新的集合类型，为这门语言带来了真正的键/值存储机制;
1. 基本API
    - 使用new和Map构造函数创建一个空映射：
```
    const m = new Map();
```
- 如果想在创建的同时进行初始化实例，可以给Map构造函数传入一个可迭代对象，需要包含键/值对数组。
2. 初始化映射：
```
    1. 使用嵌套数组初始化映射：
    const m1=new Map([
        ["key1","val1"],
        ["key2","val2"],
        ["key3","val3"]
    ]);
    alert(m1.size);//3

    2. 使用自定义迭代器初始化映射
    const m2= new Map({
        [Symbol.iterator]:function*(){
            yield ["key1","val1"];
            yield ["key2","val2"];
            yield ["key3","val3"]
        }
    });
    alert(m2.size);//3

    3. 映射期待的键/值对，无论是否提供
    const m3=new Map([]);
    alert(m3.has(undefined));//true
    alert(m3.get(undefined));//undefiend
```
3. 初始化后：

    1. 可以使用set()方法在添加键/值对；
    ```
    m.set("firstName","qiqi");
    ```
    2. 可以使用get()和has()进行查询；
    ```
    m.get("firstname");//jachin
    m.has("firstName");//true
    ```
    3. 可以通过size属性获取映射中的键/值对的数量;
    ```
    m.size;
    ```
    4. 可以使用delete()和clear()删除值；
    ```
    m.delete("firstname");//只删除这一个键/值对；
    m.clear();//清除整个映射中的所有键/值对；
    ```
4. set()方法可以映射实例，因此可以把多个操作连缀起来，包括初始化声明
```
    const m= new Map().set("key1","val1");
    m.set("key2","val2").set("key3","val3");
    alert(m.size);      //3
```
5. Map内部使用SameValueZero比较操作，基本上相当于使用严格对象相等的标准来检查键的匹配性。
6. 顺序与迭代
    与Object类型一个主要差异是：Map实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作；
    映射可以提供一个迭代器，能以插入顺序生成[key,value]形式的数组，可以通过entries()方法取得这个迭代器：

### 5. WeakMap
- WeakMap(弱映射)是Map的兄弟类型，其API也是Map的子集，其中weak是指JavaScript垃圾回收程序对待"弱映射"中键的方式；
1. 基本API
    1. 初始化时填充弱映射，则构造函数可以接收一个迭代对象，其中需要包含键/值对数组。
    2. 初始化操作跟Map()的一样，同样set(),delete()和get(),has()这些操作一样跟Map的。

2. 弱键
    1. 只要键存在，键/值对就会存在于映射中，并被当作值的引用，因此不会被当成垃圾回收。
```
    一：没有指向这个对象的其他引用，当这行代码执行完毕，这个对象键就会被当作垃圾回收，这个键/值对从弱映射中消失了，使该映射变成了空映射；
    const vm =new WeakMap();
    vm.set({},"val");

    二：某对象维护着一个对弱映射键的引用，使这个对象键不会被垃圾回收的目的；
    const vm=new WeakMap();
    const container={
        key:{};
    }
    vm.set(container.key,"val");
    <!-- 如果调用remove(),就会摧毁对象的最后一个引用，垃圾回收程序就会将这个键/值对清理掉 -->
    function remove(){
        container.key=null;
    }
```
3. 不可迭代键
    - 因为弱映射的键/值对任何时候都可能被摧毁，所以就没有必要提供迭代其键/值对的能力。

4. 使用弱映射
    - 弱映射造就了再JavaScript中实现真正私有变量的一种新方式，前提：私有变量会存储再弱映射中，以对象实例为键，以私有成员的字典为值。

### 6. Set
- 为ES6带来了集合数据结构，很多方面都像加强的Map,它们之间的大多数API和行为都是公用的；
1. 基本API
    - 如果想要再创建的同时初始化实例，则可以给Set构造函数传入一个迭代对象，其中包含插入集合的元素：
```
    const s1=new Set(['val1','val2','val3']);
```