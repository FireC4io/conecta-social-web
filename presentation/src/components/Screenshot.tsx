import { useEffect, useRef, useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import type { Screenshot as ScreenshotData } from '../data/content'

export function Screenshot({ data, compact = false }: { data: ScreenshotData; compact?: boolean }) {
  const [failed, setFailed] = useState(false)
  const [zoomed, setZoomed] = useState(false)
  const [wasFocused, setWasFocused] = useState<HTMLButtonElement | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const close = () => { setZoomed(false); setTimeout(() => wasFocused?.focus(), 0) }
  useEffect(() => {
    if (!zoomed) return
    closeButton.current?.focus()
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { event.stopPropagation(); close() } }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [zoomed, wasFocused])
  const image = !failed ? <img src={data.src} alt={`${data.platform}: ${data.label}${data.historical ? ', captura histórica' : ''}`} style={data.previewPosition ? { objectPosition: data.previewPosition } : undefined} onError={() => setFailed(true)} /> : null
  return <>
    <div className={`shot ${data.platform === 'MOBILE' ? 'shot-mobile' : 'shot-web'} ${compact ? 'shot-compact' : ''}`}>
      <div className="shot-bar"><span>{data.platform} · {data.label}</span>{image && <button type="button" className="icon-button" aria-label={`Ampliar ${data.label}`} onClick={(event) => { setWasFocused(event.currentTarget); setZoomed(true) }}><Maximize2 size={19}/></button>}</div>
      <div className="shot-media">{image || <div className="shot-placeholder"><strong>CAPTURA PENDENTE</strong><span>{data.platform} · {data.label}</span><code>public{data.src}</code></div>}</div>
      {data.historical && <div className="shot-caption">Captura histórica · valores ilustrativos da tela, não métricas atuais</div>}
    </div>
    {zoomed && image && <div className="zoom-overlay" role="dialog" aria-modal="true" aria-label={`Imagem ampliada: ${data.label}`} onClick={close}><button ref={closeButton} type="button" className="zoom-close" aria-label="Fechar imagem" onClick={close}><X/></button><img src={data.src} alt={`${data.platform}: ${data.label}`} onClick={e => e.stopPropagation()} /></div>}
  </>
}
