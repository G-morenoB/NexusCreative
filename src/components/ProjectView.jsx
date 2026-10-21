import TechView from './TechView'

export default function ProjectView({ folder }) {
  if (!folder) return null
  if (folder.type === 'tech') return <TechView />
  const shots = folder.images?.length ? folder.images : [null, null]
  return (
    <div className="track">
      {shots.map((src, i) =>
        src
          ? <div className="shot has-img" key={i}><img src={src} alt={`${folder.name} ${i + 1}`} /></div>
          : <div className="shot" key={i}>Captura {i + 1} de {folder.name}<br />(agrega tu imagen en content.js)</div>
      )}
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