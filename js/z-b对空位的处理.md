####  ES5中
- orEach(),filter(),reduce(),every()和some()都会跳过空位；
- map()会跳过空位，但是也会保留这个值；
- join()和toString()会将空位是为undefined，而undefined和null会被处理城空字符串

#### ES6中
- 都会将空位当成undefined