import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { hashPassword } from 'src/utils/password';

const router: Router = Router();
const prisma = new PrismaClient();

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  res.json({
    message: 'User created',
    userId: user.id,
  });
});

export default router;
