#### jQuery对象
- 通过Jquery($())包装DOM对象后产生的对象；
- jQuery对象是独有的；
- **注意：**jQuery对象无法使用DOM对象的任何方法，同样DOM对象也无法使用jQuery中的任何方法
    
#### jQuery对象转换为DOM对象(2种方法)
- 1. jQuery是一个数组对象,可以通过\[index]得到对应的DOM对象；
```
    var $cr=$("#cr");
    var cr=$cr[0];
```
- 2. 使用jQuery中的get(index)方法得到相应的DOM对象
```
    var $cr=$("#cr");
    var cr=$cr.get[0];
```

#### DOM对象转换为jQuery对象
- 直接使用$()把DOM对象包装起来;
```
    var cr = document.getElementById("cr");
    var $cr =$(cr);
```