import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to Vyshnav
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `📩 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #0f172a; color: #e0f7fa; border-radius: 10px;">
          <h2 style="color: #00ffff;">💬 New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #00ffff; padding-left: 10px; color: #a7f3d0;">
            ${message}
          </blockquote>
          <hr style="border: 1px solid #00ffff; margin: 20px 0;" />
          <p style="font-size: 12px;">Sent from Vyshnav’s Portfolio 🚀</p>
        </div>
      `,
    });

    // Send auto-reply to the user (without sending their own message)
    await transporter.sendMail({
      from: `"Vyshnav M S" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "📬 Thanks for contacting Vyshnav!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #0f172a; color: #e0f7fa; border-radius: 10px;">
          <h3 style="color: #00ffff;">Hey ${name},</h3>
          <p>Thanks for reaching out through my portfolio! 🙌</p>
          <p>I’ve received your message and will get back to you soon.</p>
          <p>Meanwhile, feel free to check out my recent projects or connect on LinkedIn.</p>
          <hr style="border: 1px solid #00ffff;" />
          <p style="font-size: 12px;">— Vyshnav M S<br/>Full Stack Developer</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send message" });
  }
}
    