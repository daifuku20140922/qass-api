import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { id: 9999999 },
    update: {},
    create: {
      id: 9999999,
      name: 'test user',
      department: 'test group',
      password: 'test',
    },
  });
  console.log({ user1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
