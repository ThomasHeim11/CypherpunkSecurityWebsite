#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function encodeUrl(url) {
  return Buffer.from(url).toString('base64');
}

async function setup() {
  console.log('🔐 Fast URL Encoder');
  console.log('==================\n');

  const typeformUrl = await new Promise(resolve => {
    rl.question('Enter your Typeform URL: ', resolve);
  });

  const linkedinUrl = await new Promise(resolve => {
    rl.question('Enter your LinkedIn URL: ', resolve);
  });

  const xUrl = await new Promise(resolve => {
    rl.question('Enter your X (Twitter) URL: ', resolve);
  });

  // Encode URLs
  const encodedTypeform = encodeUrl(typeformUrl);
  const encodedLinkedin = encodeUrl(linkedinUrl);
  const encodedX = encodeUrl(xUrl);

  // Create .env.local file
  const envContent = `# Encrypted URLs (Base64 encoded for basic obfuscation)
NEXT_PUBLIC_TYPEFORM_URL=${encodedTypeform}
NEXT_PUBLIC_LINKEDIN_URL=${encodedLinkedin}
NEXT_PUBLIC_X_URL=${encodedX}
`;

  fs.writeFileSync('.env.local', envContent);

  console.log('\n✅ URLs encoded and saved to .env.local!');
  console.log('🚀 Your website will be lightning fast!');
  console.log('🔒 URLs are obfuscated from casual viewing\n');

  rl.close();
}

setup().catch(console.error);
