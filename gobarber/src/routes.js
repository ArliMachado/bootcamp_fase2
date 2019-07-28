import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Arli Lima',
    email: 'arli.machado@gmail.com',
    password_hash: '12345',
  });
  return res.json(user);
});

export default routes;