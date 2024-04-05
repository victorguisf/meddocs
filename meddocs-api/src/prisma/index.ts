import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient();

export default prismaClient;

// Estamos configurando o Prisma para ser utilizado no projeto, permitindo que haja a interação com o banco de dados de forma eficiente e segura