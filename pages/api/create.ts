import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log(req)
    console.log(req.method)
    if (req.method === 'POST') {
        try {
            const { name, region, phone, content } = req.body
            const customer = await prisma.customer.create({
                data: {
                    name,
                    region,
                    content
                },
            })
            res.status(200).json(customer)
        } catch (error) {
            res.status(500).json({ error: 'Fail insert' })
        } finally {
            await prisma.$disconnect()
        }
    } else {
        // res.setHeader('Allow', ['POST'])
        // res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}