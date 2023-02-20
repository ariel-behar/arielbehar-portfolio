import { Router, Request, Response } from 'express'
import nodemailer from 'nodemailer'
import * as env from 'dotenv'

env.config()

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;

    const output = `
        <h2>You have a new form submission on Ariel Behar's portfolio site!</h2>
        <h3>Submission Details</h3>
        <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Subject: ${subject}</li>
            <li>Message: ${message}</li>
        </ul>
    `;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        host: 'smtp.live.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAILFROM,
            pass: process.env.PASSWORD,
        },
        from: process.env.EMAILFROM, 
        tls: {
            rejectUnauthorized: false,
        },
    });

    const options = {
        from: `PORTFOLIO SITE <${process.env.EMAILFROM}>`,
        to: process.env.EMAILTO,
        subject: 'PORTFOLIO SITE SUBMISSION',
        text: 'PORTFOLIO FORM SUBMISSION',
        html: output,
    }

    const info = await transporter.sendMail(options);

    transporter.verify(function (err, success) {
        if (err) {
            res.status(500).send({message: 'An error occurred while attempting to process your message.'})
            console.log(err);
        } else {
            console.log('Message sent: %s', info.messageId);
            res.status(200).json({success: success})
        }
    });
})


export default router;