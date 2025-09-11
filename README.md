# Appify Intelligence - Next.js Website

A modern, AI-focused business website built with Next.js, featuring a spectacular animated loader and functional contact forms.

## Features

- 🚀 **Next.js 14** - React framework with SSR/SSG
- 💌 **Working Contact Form** - Email delivery via Nodemailer 
- 🎨 **Stunning Animations** - Custom CSS animations and effects
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Fast Performance** - Optimized loading and rendering
- 🎯 **SEO Optimized** - Meta tags and structured data

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the environment template:
```bash
cp .env.example .env.local
```

Configure your email settings in `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account Settings > Security > App Passwords
3. Generate an App Password for "Mail"
4. Use this App Password as `SMTP_PASSWORD` in your `.env.local`

## Deployment

### Railway.com (Recommended)

1. Connect your GitHub repo to Railway
2. Add environment variables in Railway dashboard
3. Deploy automatically on push

### Vercel

```bash
npm run build
npx vercel --prod
```

### Netlify

```bash
npm run build
npx netlify deploy --prod --dir=out
```

## Project Structure

```
├── components/          # React components
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   └── index.js       # Homepage
├── styles/            # CSS styles
├── hooks/             # Custom React hooks
└── public/            # Static assets
```

## Contact Form API

The contact form uses `/api/contact` endpoint which:
- Validates form data
- Sends email to business
- Sends auto-reply to user
- Returns JSON response

## Performance Features

- Automatic code splitting
- Image optimization
- CSS minification
- Font optimization
- Lazy loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Appify Intelligence. All rights reserved.