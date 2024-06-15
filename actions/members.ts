'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchMembers() {
    const allUsers = await prisma.members.findMany()
    return allUsers;
  }