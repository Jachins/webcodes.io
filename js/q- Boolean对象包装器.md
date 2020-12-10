#### Boolean一个产生逻辑值的对象包装器，用于将非逻辑值转换为逻辑值
- 使用new关键字来定义Boolean对象；
- 对象无初始值或者其值为0，-0，null,"",false,undefined或者NaN，那么对象的值为false;
- **除了上面那几个，其他值都是true**

```
    var test=new Boolean(0);
    console.log(test);//false

    var test=new Boolean(false);
    console.log(test);//false
```