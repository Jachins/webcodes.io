### javascript模块化
- AMD是"Asynchronous Module Definiton"的缩写，即异步模块定义，采用异步方式加载模块，模块的加载不影响后面的语句的运行；
- 所有依赖这个模块的语句，都定义再一个回调函数中，等加载完成之后，这个回调函数才会运行；

#### 两个实现Javascript库实现AMD规范：require.js和curl.js
- AMD是Require JS推广过程中对模块定义的规范化产出；
- CMD是Sea JS再推广过程中对模块定义的规范化产出；

#### 两者区别:
- 对于依赖的模块，AMD是提前运行，CMD是延迟执行；
- **CMD推祟依赖就近，AMD推祟依赖前置；**