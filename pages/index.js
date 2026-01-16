export default function Home() {
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
        background: '#f8f8f8',
        borderBottom: '1px solid #e6e6e6',
        zIndex: 40
      }}>
        <button>Menu 1</button>
        <button>Menu 2</button>
        <button>Menu 3</button>
        <button>Menu 4</button>
        <button>Menu 5</button>
      </nav>

      <main style={{
        paddingTop: 80 + 48,
        minHeight: '100vh',
        background: '#f5f5f5',
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
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>#</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Coin</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Descripción</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Multiplicador</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>1</td>
                  <td style={{ padding: '0.6rem 1rem' }}>MoonPup</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Token emergente con volumen creciente</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>2x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>2</td>
                  <td style={{ padding: '0.6rem 1rem' }}>StarDoge</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Pequeña comunidad, alta volatilidad</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>3x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>3</td>
                  <td style={{ padding: '0.6rem 1rem' }}>LaserCat</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Rumores de listados en exchanges</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>5x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>4</td>
                  <td style={{ padding: '0.6rem 1rem' }}>QuantumShib</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Impulso especulativo reciente</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>8x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>5</td>
                  <td style={{ padding: '0.6rem 1rem' }}>RocketPepe</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Comunidad activa y marketing</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>12x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>6</td>
                  <td style={{ padding: '0.6rem 1rem' }}>HyperFloki</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Alta liquidez temporal</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>25x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>7</td>
                  <td style={{ padding: '0.6rem 1rem' }}>GalaxyINU</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Proyecto con roadmap ambicioso</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>50x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>8</td>
                  <td style={{ padding: '0.6rem 1rem' }}>PhantomDoge</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Movimientos explosivos recientes</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>100x</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>9</td>
                  <td style={{ padding: '0.6rem 1rem' }}>NebulaMix</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Token meme viral</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>200x</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.6rem 1rem' }}>10</td>
                  <td style={{ padding: '0.6rem 1rem' }}>ShadowToken</td>
                  <td style={{ padding: '0.6rem 1rem' }}>Riesgo alto — posible caída fuerte</td>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: 700, color: '#b21f1f' }}>Pérdida -90%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}
