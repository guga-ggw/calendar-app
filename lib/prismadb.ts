import { PrismaClient } from "@prisma/client"

declare global {
   var prisma : PrismaClient | undefined 
}

const Client = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = Client

export default Client