import { useEffect, useState } from 'react'

export default function Home() {
  const initialRows = [
    { id: 1, name: 'MoonPup', desc: 'Token emergente con volumen creciente', target: 2 },
    { id: 2, name: 'StarDoge', desc: 'Pequeña comunidad, alta volatilidad', target: 3 },
    { id: 3, name: 'LaserCat', desc: 'Rumores de listados en exchanges', target: 5 },
    { id: 4, name: 'QuantumShib', desc: 'Impulso especulativo reciente', target: 8 },
    { id: 5, name: 'RocketPepe', desc: 'Comunidad activa y marketing', target: 12 },
    { id: 6, name: 'HyperFloki', desc: 'Alta liquidez temporal', target: 25 },
    { id: 7, name: 'GalaxyINU', desc: 'Proyecto con roadmap ambicioso', target: 50 },
    { id: 8, name: 'PhantomDoge', desc: 'Movimientos explosivos recientes', target: 100 },
    { id: 9, name: 'NebulaMix', desc: 'Token meme viral', target: 200 },
    { id: 10, name: 'ShadowToken', desc: 'Riesgo alto — posible caída fuerte', target: -90, isLoss: true }
  ]

  const seededInitial = initialRows.map(r => {
    if (r.isLoss) return { ...r, display: 'Pérdida -90%' }
    const init = Math.max(1, Math.floor(r.target * 0.05))
    return { ...r, initial: init, current: init }
  })

  const [rows, setRows] = useState(seededInitial)

  useEffect(() => {
    // animate multipliers every second for 15 seconds
    let elapsed = 0
    const total = 15
    const interval = setInterval(() => {
      elapsed += 1
      setRows(prev => prev.map(r => {
        if (r.isLoss) return r
        const f = Math.min(elapsed / total, 1)
        const base = r.initial + (r.target - r.initial) * f
        // small random positive jitter to make it feel dynamic
        const jitter = Math.random() * Math.max(1, r.target * 0.02)
        const next = Math.min(r.target, Math.floor(base + jitter))
        // ensure monotonic increase
        const current = Math.max(r.current || r.initial, next)
        return { ...r, current }
      }))
      if (elapsed >= total) clearInterval(interval)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2b2b2b',
        color: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        zIndex: 50,
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
      }}>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#fff', fontWeight: 700 }}>Extreme trading</h1>
      </header>

      <nav style={{
        position: 'fixed',
        top: 80,
        left: 0,
        right: 0,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#1a1a1a',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        zIndex: 40
      }}>
        <MenuIntro />
        <button style={{ background: 'transparent', color: '#eee', border: 'none' }}>Menu 2</button>
        <button style={{ background: 'transparent', color: '#eee', border: 'none' }}>Menu 3</button>
        <button style={{ background: 'transparent', color: '#eee', border: 'none' }}>Menu 4</button>
        <button style={{ background: 'transparent', color: '#eee', border: 'none' }}>Menu 5</button>
      </nav>

      <main style={{
        paddingTop: 80 + 48,
        minHeight: '100vh',
        background: '#0f0f0f',
        color: '#eee',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
      }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '2rem'
        }}>
          <section style={{ flex: 1 }}>
            <h2 style={{ marginTop: 0 }}>Bondades de un sistema extremo de trading</h2>
            <ul>
              <li>Alta rentabilidad potencial en movimientos extremos.</li>
              <li>Operaciones automáticas 24/7 sin intervención humana.</li>
              <li>Gestión de riesgo integrada y reglas claras de salida.</li>
              <li>Backtesting y ajuste continuo basado en datos.</li>
              <li>Escalabilidad para múltiples mercados y activos.</li>
            </ul>
          </section>

          <aside style={{ width: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: 400, background: '#fff', padding: '1rem', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
              <svg width="100%" height="220" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="stock-chart">
                <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" rx="6" />

                {/* grid horizontal */}
                <g stroke="#eee">
                  <line x1="40" y1="20" x2="380" y2="20" />
                  <line x1="40" y1="60" x2="380" y2="60" />
                  <line x1="40" y1="100" x2="380" y2="100" />
                  <line x1="40" y1="140" x2="380" y2="140" />
                  <line x1="40" y1="180" x2="380" y2="180" />
                </g>

                {/* y axis labels */}
                <g fill="#666" fontSize="11" textAnchor="end">
                  <text x="36" y="24">$25</text>
                  <text x="36" y="64">$20</text>
                  <text x="36" y="104">$15</text>
                  <text x="36" y="144">$10</text>
                  <text x="36" y="184">$5</text>
                </g>

                {/* x axis labels */}
                <g fill="#666" fontSize="11" textAnchor="middle">
                  <text x="80" y="205">01</text>
                  <text x="160" y="205">04</text>
                  <text x="240" y="205">07</text>
                  <text x="320" y="205">10</text>
                </g>

                {/* area under line */}
                <path d="M40 170 L80 160 L120 165 L160 150 L200 135 L240 120 L280 100 L320 80 L360 40 L380 20 L380 180 L40 180 Z" fill="#ffcccc" opacity="0.45" />

                {/* price line */}
                <path d="M40 170 L80 160 L120 165 L160 150 L200 135 L240 120 L280 100 L320 80 L360 40 L380 20" fill="none" stroke="#d61f1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {/* last price marker */}
                <circle cx="380" cy="20" r="5" fill="#d61f1f" />
                <text x="384" y="16" fontSize="12" fill="#333">$25</text>

                {/* first price marker */}
                <circle cx="40" cy="170" r="4" fill="#d61f1f" />
                <text x="44" y="186" fontSize="11" fill="#333">$0.003</text>
              </svg>
              <div style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: 700 }}>$0.003 → $25</div>
            </div>
          </aside>
        </div>

        <section style={{ display: 'flex', justifyContent: 'center', padding: '2rem 1rem' }}>
          <div style={{
            maxWidth: 1000,
            background: '#fff',
            padding: '1.25rem 1.5rem',
            borderRadius: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#b21f1f', lineHeight: '1.1' }}>
              oportunidad unica de multiplicar x1000 tu capital , convierte 100$ en 100.000$ en unos dias .
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1100, margin: '1rem auto 3rem', padding: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Oportunidades de la semana</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#1b1b1b', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.06)', color: '#eee' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <th style={{ padding: '0.75rem 1rem', background: '#222', color: '#fff' }}>#</th>
                  <th style={{ padding: '0.75rem 1rem', background: '#222', color: '#fff' }}>Coin</th>
                  <th style={{ padding: '0.75rem 1rem', background: '#222', color: '#fff' }}>Descripción</th>
                  <th style={{ padding: '0.75rem 1rem', background: '#222', color: '#fff' }}>Multiplicador</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={r.id} style={{ borderBottom: idx !== rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : undefined }}>
                    <td style={{ padding: '0.6rem 1rem' }}>{r.id}</td>
                    <td style={{ padding: '0.6rem 1rem' }}>{r.name}</td>
                    <td style={{ padding: '0.6rem 1rem', color: '#ddd' }}>{r.desc}</td>
                    <td style={{ padding: '0.6rem 1rem', fontWeight: 700, color: r.isLoss ? '#ff6b6b' : '#fff' }}>
                      {r.isLoss ? r.display : `${r.current}x`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}

function MenuIntro() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(s => !s)}
        style={{ background: 'transparent', color: '#fff', border: 'none', padding: '0.5rem 0.75rem', fontWeight: 700 }}
      >
        Intro ▾
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          background: '#222',
          color: '#fff',
          borderRadius: 6,
          boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
          marginTop: 8,
          minWidth: 160,
          overflow: 'hidden'
        }}>
          <a href="#" style={{ display: 'block', padding: '0.6rem 0.9rem', color: '#fff', textDecoration: 'none' }}>Crear Cuenta</a>
          <a href="#" style={{ display: 'block', padding: '0.6rem 0.9rem', color: '#fff', textDecoration: 'none' }}>Demo</a>
          <a href="#" style={{ display: 'block', padding: '0.6rem 0.9rem', color: '#fff', textDecoration: 'none' }}>Acerca de Nosotros</a>
        </div>
      )}
    </div>
  )
}
