// snabbdom没有export default 导致只能用对象解构赋值形式
import { h, init, thunk } from 'snabbdom';

/*
init函数
参数:数据类型数组，里面传入模块
返回值: patch函数，作用对比两个vnode的差异更新到真实dom
*/
let patch = init([]); // 返回一个patch函数
console.log('patch :>> ', patch);

/*
h函数
参数:
第一个参数：标签+选择器
第二个参数：标签中到内容
返回值是vnode
*/
let vnode = h('div#container.cls', 'hello world');
console.log('vnode :>> ', vnode);
