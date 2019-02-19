# js常用工具库

> 该仓库收集了一些常用的工具和校验函数，现有列表中的函数单元测试覆盖率接近100%。

## 函数列表
- curry(fn, currArgs)
``` js
/**
 * 函数的柯里化
 * @param {function} fn 需要柯里化的函数
 * @param {any} currArgs 该参数可以为需要的定值，类型根据fn参数的类型来确定
 * @return {function} 柯里化后的函数
 */
```

- getParams(url, key)
``` js
/**
 * 获取url参数
 * @param {string} url url地址
 * @param {string} key 要获取的参数值
 * @return {string} 要获取的参数值，没有则返回null
 */
```

- isCardID(id)
``` js
/**
 * 身份证校验函数
 * @param {number | string} id 身份证号
 * @return {boolean} 是否为身份证号
 */
```

- isCreditCode(credNum)
``` js
/**
 * 身份证校验函数
 * @param {number | string} id 身份证号
 * @return {boolean} 是否为身份证号
 */
```

- isEmail(email)
``` js
/**
 * 验证邮箱
 * @param {string} email
 * @return {boolean} 是否是邮箱
 */
```

- isEmpty(obj)
``` js
/**
 * 验证是否是空数组和空对象
 * @param {array | object} obj
 */
```

- isPhone(phone)
``` js
/**
 * 验证手机号
 * @param {number | string} phone
 */
```

