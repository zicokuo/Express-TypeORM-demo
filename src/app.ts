/*
 * @Author: Zico
 * @Date: 2021-03-12 08:52:48
 * @LastEditors: Zico
 * @LastEditTime: 2021-03-12 09:29:48
 * @FilePath: \Express-TypeORM-demo\src\app.ts
 */
import "reflect-metadata";              // TypeORM 必须库
import "module-alias/register";         // 文件引用别名（@/）
import express from 'express';          // express
import bodyParser from 'body-parser';   // 请求数据解析
import router from './router';          // router

let port = 8753;  // 端口号

const app = express();  // 初始化 express

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);   // 添加路由

// 监听端口
app.listen(port, () => {
  console.log(`Application has started on Port ${port}`);
});
