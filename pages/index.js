export default function Home() {
  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        zIndex: 50,
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Extreme trading</h1>
      </header>

      <nav style={{
        position: 'fixed',
        top: 64,
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
        paddingTop: 64 + 48,
        minHeight: '100vh',
        background: '#f5f5f5',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
      }}>
        {/* contenido vacío, sólo header + menú como pidió */}
      </main>
    </>
  )
}
