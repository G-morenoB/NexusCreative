import TechView from './TechView'

export default function ProjectView({ folder }) {
  if (!folder) return null
  if (folder.type === 'tech') return <TechView />
  const hasImages = folder.images?.length > 0
  return (
    <div className="track">
      {hasImages
        ? folder.images.map((src, i) => (
            <img className="shot-img" key={i} src={src} alt={`${folder.name} ${i + 1}`} />
          ))
        : [1, 2].map((n) => (
            <div className="shot" key={n}>Captura {n} de {folder.name}<br />(agrega tu imagen en content.js)</div>
          ))}
      <div className="info">
        <div className="scope"><small>Descripción</small>{folder.description}</div>
        {folder.links?.length > 0 && (
          <div className="links">
            {folder.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label} →</a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
