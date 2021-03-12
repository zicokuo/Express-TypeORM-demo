/*
 * @Author: Zico
 * @Date: 2021-03-12 08:52:48
 * @LastEditors: Zico
 * @LastEditTime: 2021-03-12 09:27:53
 * @Description: eBayMonitor Server
 * @FilePath: \Express-TypeORM-demo\src\routes.ts
 */

import express from 'express';

interface callback {
  (request: express.Request, response: express.Response): void;
}

type Routes = {
  path: string;
  type: "GET" | "POST" | "DELETE" | "PUT";
  cb: callback;
}[];

export const routes: Routes = [
  { path: "/", type: "GET", cb: (requst, response) => {response.send("Welcome to home page.")} },
  {
    path: "/user", type: "GET", cb: (requst, response) => {
      response.send("Welcome to home page222222232322.")
    }
  },
];
