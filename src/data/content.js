// ✏️ Edita aquí todo el contenido del portafolio.

export const profile = {
  name: 'Nexus Creative - Desarrollo web',
  shortName: 'Gael Bataz',
  role: 'Gustavo Hernández',
  topLabel: 'Desarrollo Web',
  heroText: 'Construimos cosas',
  intro: 'Desarrollo sitios web, tiendas online y aplicaciones responsive.',
  hiLabel: 'Hola',               // texto de la tarjeta morada
  city: 'CDMX',            // ciudad que se muestra junto a la hora
  timeZone: 'America/Mexico_City',
  email: 'tu@correo.com',
  linkedin: '#',
  github: '#',
  photo: 'https://res.cloudinary.com/duytqng6m/image/upload/v1792627182/logo4.png',                   // ej. '/foto.jpg' (archivo dentro de /public)
  bio: [
    'Somos Nexus Creative',
    'Un equipo de desarrolladores web especializados en crear soluciones digitales innovadoras.',
    'Hacemos páginas web, tiendas online y aplicaciones responsive adaptadas a las necesidades de cada cliente.',
    'Nos enfocamos en crear soluciones funcionales, eficientes y adaptadas a las necesidades de cada proyecto.',
  ],
}

export const projects = [
{
  name: 'Invitaciones',
  description: 'Invitaciones web personalizadas para eventos.',
  images: ['https://res.cloudinary.com/duytqng6m/image/upload/v1792623677/inv1.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792623683/inv2.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792623682/inv3.png'],
  links: [
    { label: 'XV años', url: 'https://xv-inv.vercel.app/' },
    { label: 'Boda', url: 'https://inv-boda-seven.vercel.app/' },
    { label: 'Cumpleaños', url: 'https://invitacion-gianna.vercel.app/' },
  ],
},
{
  name: 'PÁGINAS WEB',
  description: 'Sitios web personalizados para diferentes necesidades.',
  images: ['https://res.cloudinary.com/duytqng6m/image/upload/v1792455898/IMG4.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792455911/IMG6.png'],
  links: [
    { label: 'Nestor-Nutrición', url: 'https://nestorguinto-nutricion.vercel.app/' },
  ],
},
{
  name: 'TIENDA ONLINE',
  description: 'Tiendas online personalizadas.',
  images: ['https://res.cloudinary.com/duytqng6m/image/upload/v1792453794/IMG1.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792453779/IMG2.png'],
  links: [
    { label: 'Magic Ideas', url: 'https://magicideascdmx.com/' },
  ],
},
{
  name: 'MENÚS WEB',
  description: 'Menús digitales para restaurantes y negocios.',
  images: ['https://res.cloudinary.com/duytqng6m/image/upload/v1792453794/IMG1.png','https://res.cloudinary.com/duytqng6m/image/upload/v1792453779/IMG2.png'],
  links: [
    { label: 'Café', url: 'https://menu-cafe-fawn.vercel.app/' },
    { label: 'Restaurante', url: 'https://menu-web-self.vercel.app/' },
    { label: 'Bar', url: 'https://menu-antrobar.vercel.app/' },
  ],
},
]

export const techGroups = [
  { title: 'Interfaces web', items: ['React', 'Next.js', 'JavaScript'] },
  { title: 'Servidor', items: ['PHP'] },
  { title: 'Sitios y tiendas', items: ['WordPress', 'WooCommerce'] },
]

// Carpetas de la pila: proyectos + la carpeta de tecnologías (al final)
export const folders = [
  ...projects.map((p) => ({ ...p, type: 'project' })),
  { name: 'Tecnologías', type: 'tech' },
]
