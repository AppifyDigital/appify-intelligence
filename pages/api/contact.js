import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, company, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    // Create transporter (configure with your email provider)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your app password
      },
    })

    // Email to company
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'hello@appifyintelligence.ie', // Your business email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Appify Intelligence',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The Appify Intelligence Team</p>
      `,
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
}