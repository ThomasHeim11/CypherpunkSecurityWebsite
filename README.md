# CypherpunkSecurity

A professional cyberpunk-themed website for CypherpunkSecurity, specializing in smart contract
audits and blockchain security.

## Features

- 🔒 Cyberpunk-themed dark design with neon accents
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🚀 Optimized for Netlify deployment
- 📝 Integrated Typeform for audit requests

## Design

The website features a professional cyberpunk aesthetic with:

- Dark background with neon green, blue, and purple accents
- High contrast colors for optimal readability
- Monospace fonts for that tech/hacker feel
- Subtle grid backgrounds and glow effects
- Animated hover states and transitions

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cypherpunk-security
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Typeform Integration

To connect the "Request Audit" buttons to your Typeform:

1. Create a Typeform for audit requests
2. Get your Typeform URL (format: `https://form.typeform.com/to/YOUR_FORM_ID`)
3. Replace `YOUR_TYPEFORM_ID` in `app/page.tsx` with your actual form ID

## Deployment

### Netlify Deployment

1. Build the static site:

```bash
npm run build
```

2. Deploy the `out` folder to Netlify:
   - Drag and drop the `out` folder to Netlify
   - Or connect your Git repository to Netlify for automatic deployments

### Build Settings for Netlify

- **Build command**: `npm run build`
- **Publish directory**: `out`

## Customization

### Colors

The cyberpunk color scheme is defined in `tailwind.config.js`:

- `neon-green`: #00ff94
- `neon-blue`: #00d9ff
- `neon-purple`: #bd00ff
- `dark-900`: #0a0a0a (main background)

### Content

Update the content in `app/page.tsx` to match your specific services and messaging.

### Styling

Custom CSS classes are defined in `app/globals.css`:

- `.cyber-border`: Glowing border effect
- `.cyber-button`: Animated neon button
- `.cyber-glow`: Text glow effect

## License

All rights reserved - CypherpunkSecurity
