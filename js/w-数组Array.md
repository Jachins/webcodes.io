## 数组

### 1.创建数组(两种方法)

    - 1. 使用Array构造函数，如

```
 
    let colors = new Array();
    或
    let colors =new Array(20);//定好长度
    或
    let colors =new Array("red","green",22);//数组里面每个槽位可以放任意类型的数据
```
    -1.1. Array构造函数有两个ES6新增的函数，Array.form()喝Array.of():
```
    Array.from():用于将类数组结构转换为数组实例;
    
    console.log(Array.from('Matt');//['M','a','t','t'];
    
    Array.of():可以将一组参数转换为数组；
    console.log(Array.of(1,2,3,4));//[1,2,3,4]
    
```
    - 2.使用数组字面量(array literal)
        (其中数组字面量是在中括号中包含以逗号为分隔的元素列表);
```
    let colors=['red','green','blue'];
    let names=[];
    let values=[1,2,];//长度为2；
```
### 2. 数组空位
    - 1.使用数组字面量初始化数据时，可以使用一串逗号来创建空位(hole);
```
    let test =[,,,];
    for(let i in test){
        console.log(i===undefined);//true true true
    }
```
### 3. 栈方法
    数组提供了类似栈的方法，后进先出(LIFO),提供了push()推入和pop()弹出；
```
    push():将元素添加到数组末尾，并返回数组的最新长度；
    pop():删除数组的最后一项，同时减少数组的长度，并返回删除的元素；
```
### 4.队列方法
### 5. 排序方法
    reverse():将数组元素反向排列；
```
    let value=[1,2,3,4,5];
    value.reverse();//value=[5,4,3,2,1];
```
    sort():按照升序重新排列数组元素，即小在前，大在后；需要借助一个比较函数作为参数；
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
### 6. 操作方法
    
### 7. 迭代方法：(传给每个方法的函数有三个参数：数组元素、元素索引值和数组本身)
    - 1. every():对数组每一项都运行传入的函数，如果对每一项函数都返回true,则这个方法返回true；
    
    - 2. some():对数组每一项都运行传入的函数，如果有一项函数返回true,则这个方法就返回true;
    
    - 3.filter():对数组每一项都运行传入的函数，函数返回true的项都会组成数组返回；
    
    - 4.forEach():对数组每一项都运行传入的函数，没有返回值，直接执行某些操作，相当于for循环遍历数组；
    
    - 5.map():对数组每一项都运行传入的函数，返回由每次函数调用的结果构成数组。
    
### 8. 归并方法：reduce()和reduceRight():分别是从数组第一项遍历到最后一项和从数组最后一项遍历回到第一项；
```
    let values=[1,2,3,4,5];
    let sum=values.reduce((prev,cur,index,array)=>prev+cur};
    alter(sum)//15s
```

### 9.添加/删除元素
    - push(...items):将元素添加到数组末尾，并返回数组的最新长度；
    - pop():删除数组的最后一项，同时减少数组的长度，并返回删除的元素；
```
    let color =new Array();
    let count =color.push('red','green');//count==2;
    let item=color.pop();//item==green;
```
    - shift():删除数组的第一项并返回它，数组长度减一；
    - unshift(...items):在数组开头添加任意多个值，然后返回最新长度；
- splice():在数组中间插入元素,**都会返回一个删除元素组成的数组** 
         - 删除：splcie(要删除第一个元素的位置，要删除元素的数量)
         - 插入：splice(开始位置，0(删除元素的数量)，要插入的元素)
         - 替换：splice(开始位置，就要删除元素的数量，插入的任意多个元素)
         
    - slice():创建一个包含原有数组中的一个或者多个元素的新数组
        slice()接收两个参数，返回元素的开始索引值和结束索引值
        如果只有一个参数，则返回该参数索引值到数组末尾结束的值；
    -  注意：如果有负值，则以数组的长度的加上这个负值的出来的结果确定位置；
```
    let colors=['red','green','blue','white','black'];
    let newcolors=colors.slice(1);//['green','blue','white','black'];
```   
    
    - concat(...items):在现有的数组上创建一个新数组，把它里面的参数添加到副本末尾；
```
    打平数组参数的行为可以重写，Symbol.isConcatSpreadable可以阻止打平参数数组，相反把他的值设为true则可以强制打平数组对象
    let color=['red','green','white'];
    let newcolor=['blue','black'];
    let newcolor1={
        [Symbol.isCOncatSpreadable]:true,
        length:2,
        0:'pink',
        1:'cyan'
        };
     newcolor[Symbol.isConcatSpreadable]=false;//强制不打平数组；
     let color1=color.concat('yellow',newcolor);//强制不打平：['red','green','white','yellow',['blue','black']];
     let colornewcolor2 =color.concat(newcolor1);//强制打平：['red','green','white','pink','cyan'];
```
### 10.查询元素
    - indexOf/lastIndexOf(item,pos)  :从pos找到item,则返回索引值，否则返回-1；
```
                const index = arr.indexOf(1) // 0
```
    - includes(value) :如果数组有value,则返回true，没有则返回false;
```
                const isExist = arr.includes(6) // true
```
    - find/filter(func) :通过函数过滤元素，则返回ture条件的符合find函数的第一个值或者符合filter函数的全部值。
```
                const findItem = arr.find(item => item === 3) // 返回子项    
                const value = arr.filter(item => item % 2 === 0)//返回条件的数值组成的数组
```
    - findIndex和find类似，则返回索引而不是值；
```
                const index = arr.findIndex(item => item.value === 2);//返回2所在数组的位置
```

### 11.转换数组
    - map(func):对数组每一项都运行传入的函数，返回由每次函数调用的结果构成数组。
```
                const value = arr.map(item => item * 3)
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
                let value=[1,8,2,3,5];
                value.sort(compare);//value==[1,2,3,5,8];
                 改成箭头函数：value.sort((a,b)=>a<b?1:a>b?-1:0);
``` 
    -  reverse():将数组元素反向排列；
```
                let value=[1,2,3,4,5];
                value.reverse();//value=[5,4,3,2,1];
```
    - split/join :将字符串转换为数组并返回。
```
                
```
    - reduce(func,initial):通过为每个元素调用func计算数组上的单个值并在调用之间传递中间结果
```
                const value = arr.reduce((prev, curr) => prev + curr, 0);
            //reduce接收2个参数，回调函数和初始值
```

### 12. 数组去重
    - new Set(arr)接受一个数组参数并生成一个set结构的数据类型，set数据类型的元素不会重复且是Array         Iterator，所以可以利用这个特性去重。

### 13. for...in,相对于对象中的用法是有区别的：
- 数组中：
```
    var arr=['曹操','曹植','曹丕'];
    for(i in arr){
        console.log(i)//0 1  2
        console.log(arr[i])//曹操，曹植，曹丕
    }
```
- 对象中
```
    var obj= new Object();
    obj={
        father:'曹操',
        son:'曹植'
    }
    for(i in obj){
        console.log(i);//代表key值father son
        console.log(obj[i]);//代表value值，曹操，曹植
    }
```

### 14.会改变数组的方法
- push();
- pop();
- shift();
- unshift();
- splice();
- sort();
- reverse();
- forEach();

### 15.不会改变数组的方法
- filter()
- concat()
- slice()
- map()