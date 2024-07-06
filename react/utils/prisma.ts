'use server'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()


// use server is used for server side actions