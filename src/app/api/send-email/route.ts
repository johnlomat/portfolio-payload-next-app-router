import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json()

  if (!email || !name || !message) {
    return NextResponse.json({ error: 'Missing required fields' })
  }

  const mailOptions = {
    from: 'Website Inquiry <no-reply@headlesspress.xyz>',
    to: 'edwardlomat1503@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // This can help with self-signed certificates, remove if not needed
    },
  })

  try {
    const info = await transporter.sendMail(mailOptions)
    return NextResponse.json(
      {
        success: `Message delivered to ${info.accepted}`,
      },
      { status: 200 },
    )
  } catch (err: any) {
    return NextResponse.json(
      {
        error: `Error sending email: ${err.message}`,
      },
      { status: 500 },
    )
  }
}
