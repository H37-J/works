import {PrismaClient} from '@prisma/client'
import type {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient()

type RespoonseData = {
    id: string
    name: string | null;
    region: string | null;
    phone: string | null;
    content: string | null;
};

export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse<RespoonseData>) {
    console.log(req)
    console.log(req.method)
    if (req.method === 'POST') {
        try {
            const {name, region, phone, content} = req.body
            const customer = await prisma.customer.create({
                data: {
                    name,
                    region,
                    phone,
                    content
                },
            })
            res.status(200).json(customer)
        } catch (error) {
            res.status(500).json({error: 'Fail insert'})
        } finally {
            await prisma.$disconnect()
        }
    } else {
        console.log('uuuuu')
        // res.setHeader('Allow', ['POST'])
        // res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}