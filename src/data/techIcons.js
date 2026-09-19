/** Simple Icons CDN slugs + brand colors for the tech stack section. */
export const techIconMap = {
  'React Native': { slug: 'react', color: '61DAFB' },
  Expo: { slug: 'expo', color: 'FFFFFF' },
  Flutter: { slug: 'flutter', color: '02569B' },
  Dart: { slug: 'dart', color: '0175C2' },
  Android: { slug: 'android', color: '3DDC84' },
  iOS: { slug: 'apple', color: 'FFFFFF' },
  React: { slug: 'react', color: '61DAFB' },
  'Next.js': { slug: 'nextdotjs', color: 'FFFFFF' },
  JavaScript: { slug: 'javascript', color: 'F7DF1E' },
  TypeScript: { slug: 'typescript', color: '3178C6' },
  HTML: { slug: 'html5', color: 'E34F26' },
  CSS: { slug: 'css', color: '1572B6' },
  'Node.js': { slug: 'nodedotjs', color: '339933' },
  Express: { slug: 'express', color: 'FFFFFF' },
  'Express.js': { slug: 'express', color: 'FFFFFF' },
  'REST APIs': { slug: 'fastapi', color: '009688' },
  JWT: { slug: 'jsonwebtokens', color: 'FFFFFF' },
  Authentication: { slug: 'auth0', color: 'FFFFFF' },
  NestJS: { slug: 'nestjs', color: 'E0234E' },
  MongoDB: { slug: 'mongodb', color: '47A248' },
  PostgreSQL: { slug: 'postgresql', color: '4169E1' },
  Prisma: { slug: 'prisma', color: '2D3748' },
  SQL: { slug: 'postgresql', color: '4169E1' },
  Firebase: { slug: 'firebase', color: 'DD2C00' },
  Redis: { slug: 'redis', color: 'FF4438' },
  Azure: { slug: 'microsoftazure', color: '0078D4' },
  Git: { slug: 'git', color: 'F05032' },
  GitHub: { slug: 'github', color: 'FFFFFF' },
  'Socket.IO': { slug: 'socketdotio', color: 'FFFFFF' },
}

export function getTechIcon(name) {
  return techIconMap[name] || { slug: 'codepen', color: 'C9844A' }
}

export function getTechIconUrl(name) {
  const { slug, color } = getTechIcon(name)
  return `https://cdn.simpleicons.org/${slug}/${color}`
}
