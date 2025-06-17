'use client';

// Simple Base64 decoder for URL obfuscation
function decodeUrl(encoded: string): string {
  try {
    return atob(encoded);
  } catch {
    return '#';
  }
}

export const getFormUrl = (): string => {
  const encoded = process.env.NEXT_PUBLIC_TYPEFORM_URL;
  return encoded ? decodeUrl(encoded) : '#';
};

export const getLinkedInUrl = (): string => {
  const encoded = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  return encoded ? decodeUrl(encoded) : '#';
};

export const getXUrl = (): string => {
  const encoded = process.env.NEXT_PUBLIC_X_URL;
  return encoded ? decodeUrl(encoded) : '#';
};
