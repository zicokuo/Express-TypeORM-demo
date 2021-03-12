/*
 * @Author: Zico
 * @Date: 2021-03-12 08:52:48
 * @LastEditors: Zico
 * @LastEditTime: 2021-03-12 09:24:52
 * @Description: eBayMonitor Server
 * @FilePath: \Express-TypeORM-demo\src\functions\user.ts
 */

import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { User } from '../entity/User';

export default async function(request: Request, response: Response) {
  const connection = await createConnection();
  const repository = connection.getRepository(User);
  const user = new User();

  user.name = request.query.name as string;
  user.email = request.query.email as string;

  await repository.save(user);
  connection.close();
  response.send('save ok');
}
