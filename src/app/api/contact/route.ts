import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export async function POST(req: NextRequest) {
    try {
        const { name, email, message }: ContactFormData = await req.json();

        console.log()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });


        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.SMTP_TO || process.env.SMTP_USER,
            subject: `Nouveau message de ${name}`,
            text: `Nom : ${name}\nEmail : ${email}\nMessage :\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { success: false, error: "Erreur lors de l'envoi de l'email" },
            { status: 500 }
        );
    }
}
