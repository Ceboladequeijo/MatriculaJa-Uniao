import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const file = resolve("prisma", "seeders.json");

  const seed = JSON.parse(readFileSync(file));
  await prisma.redeEnsino.createMany({
    data: seed.redes,
  })
  await prisma.usuario.createMany({
    data: seed.usuarios
  })
  await prisma.escola.createMany({
    data: seed.escolas,
  });

  await prisma.turma.createMany({
    data: seed.turmas,
  });

  await prisma.turmaEscola.createMany({
    data: seed.turmasEscolas,
  });
  
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
