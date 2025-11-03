import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const ownerMail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "vyshnams1@gmail.com",
      subject: `New message from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const replyMail = {
      from: `"Vyshnav M S" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Vyshnav!",
      text: `Hi ${name},\n\nThanks for reaching out! I’ve received your message:\n"${message}"\n\nI’ll get back to you soon.\n\n— Vyshnav M S`,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(replyMail);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
