export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
    }}>
      <h1 style={{ margin: 0, fontSize: '2.5rem' }}>extreme trading</h1>

      <nav style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button>Menu 1</button>
          <button>Menu 2</button>
          <button>Menu 3</button>
          <button>Menu 4</button>
          <button>Menu 5</button>
        </div>
      </nav>
    </main>
  )
}
