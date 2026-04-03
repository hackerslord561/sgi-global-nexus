// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { entity, email, sector, payload } = body;

        // Validate the payload
        if (!entity || !email || !sector || !payload) {
            return NextResponse.json(
                { error: 'Incomplete transmission parameters.' },
                { status: 400 }
            );
        }

        // Configure the secure SMTP relay
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Construct the email format
        const mailOptions = {
            from: `SGI Sentinel <${process.env.SMTP_USER}>`,
            to: 'adama@sremgya.com', // Direct routing to Adama
            replyTo: email, // Allows Adama to hit "Reply" and email the sender directly
            subject: `SECURE TRANSMISSION: ${sector.toUpperCase()} INQUIRY - ${entity}`,
            html: `
        <div style="font-family: monospace; background-color: #001A38; color: #E2E8F0; padding: 30px; border-radius: 10px;">
          <h2 style="color: #D4AF37; margin-bottom: 20px;">SGI ENERGY DESK: INCOMING TRANSMISSION</h2>
          <hr style="border-color: rgba(255,255,255,0.1); margin-bottom: 20px;" />
          <p><strong>ENTITY / ORG:</strong> ${entity}</p>
          <p><strong>CLEARANCE ID (EMAIL):</strong> ${email}</p>
          <p><strong>SECTOR:</strong> ${sector.toUpperCase()}</p>
          <hr style="border-color: rgba(255,255,255,0.1); margin-[20px_0];" />
          <h3 style="color: #64748B;">PAYLOAD:</h3>
          <p style="background-color: rgba(255,255,255,0.05); padding: 15px; border-radius: 5px; white-space: pre-wrap;">${payload}</p>
        </div>
      `,
        };

        // Execute transmission
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Handshake successful. Transmission logged.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Transmission Failure:', error);
        return NextResponse.json(
            { error: 'Server protocol failure. Please try again.' },
            { status: 500 }
        );
    }
}