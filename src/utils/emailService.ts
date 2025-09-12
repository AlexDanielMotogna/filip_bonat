import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Interface for form submission data
export interface AnfrageSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  unterlagen: string;
}

// Function to send email
export async function sendAnfrageEmail(submission: AnfrageSubmission) {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@filipbonat.com',
      to: 'alexdanielmotogna@gmail.com', // Hardcoded recipient as specified
      subject: `Neue Anfrage - ${submission.unterlagen}`,
      html: `
        <h1>Neue Anfrage Eingereicht</h1>
        <p><strong>Unterlagen:</strong> ${submission.unterlagen}</p>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Telefon:</strong> ${submission.phone || 'Nicht angegeben'}</p>
        <p><strong>Nachricht:</strong> ${submission.message}</p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
