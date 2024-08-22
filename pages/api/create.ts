import {PrismaClient} from '@prisma/client'
import type {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient()

type ResponseData = {
    id: string
    name: string | null;
    region: string | null;
    phone: string | null;
    content: string | null;
};

export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse<ResponseData>) {
    console.log(req)
    console.log(req.method)
    if (req.method === 'POST') {
        try {
            const {name, region, phoneNumber, content} = req.body
            const customer = await prisma.customer.create({
                data: {
                    name,
                    region,
                    phoneNumber,
                    content
                },
            })
            res.status(200).json(customer)
        } finally {
            await prisma.$disconnect()
        }
    } else {
        console.log('uuuuu')
        // res.setHeader('Allow', ['POST'])
        // res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}