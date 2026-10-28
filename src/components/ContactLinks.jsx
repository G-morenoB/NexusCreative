import { profile } from '../data/content'
import { MailIcon, InstagramIcon } from './Icons'

// Instagram: acepta profile.instagram (o el nombre anterior profile.Instagam).
// El @usuario se saca del enlace; si quieres otro texto, agrega profile.instagramHandle en content.js.
const igUrl = profile.instagram || profile.Instagam
const igHandle =
  profile.instagramHandle ||
  (() => {
    try { return '@' + new URL(igUrl).pathname.split('/').filter(Boolean)[0] } catch { return 'Instagram' }
  })()

// withText = false → solo iconos (barra superior) · true → icono + dato (pie de página)
export default function ContactLinks({ withText = false }) {
  return (
    <div className="contact-links">
      <a href={`mailto:${profile.email}`} aria-label={`Correo: ${profile.email}`} title={profile.email}>
        <MailIcon />
        {withText && <span>{profile.email}</span>}
      </a>
      <a href={igUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${igHandle}`} title={igHandle}>
        <InstagramIcon />
        {withText && <span>{igHandle}</span>}
      </a>
    </div>
  )
}
