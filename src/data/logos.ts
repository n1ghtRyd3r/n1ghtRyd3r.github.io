// Build a list of available WebP logos from src/webp_images
// Using Vite's import.meta.glob to keep imports clean and centralized

const modules = import.meta.glob('../webp_images/*.webp', {
  eager: true,
  // Vite v5 style: returns string URLs
  query: '?url',
  import: 'default',
});

type LogoItem = { name: string; logo: string };

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  // Remove extension
  const withoutExt = base.replace(/\.[^.]+$/, '');
  // Extract name before the first dot (for files like "active-directory.DN9MtB_-_ZdKSsF.webp")
  const namePart = withoutExt.split('.')[0];
  // Normalize separators to spaces
  const normalized = namePart.replace(/[_-]+/g, ' ');
  // Insert space between camelCase words
  const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  // Title case each word
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

export const logos: LogoItem[] = Object.entries(modules)
  .map(([path, url]) => ({ name: toNiceName(path), logo: url as string }))
  // Keep only a stable subset first (you can remove slice to include all)
  .sort((a, b) => a.name.localeCompare(b.name));

export type { LogoItem };


