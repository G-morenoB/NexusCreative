import { profile } from '../data/content'
import ContactLinks from './ContactLinks'

export default function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <ContactLinks withText />
    </footer>
  )
}
