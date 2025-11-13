import { Menu, AppWindow } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-400 to-fuchsia-400 grid place-items-center text-white shadow-lg shadow-fuchsia-500/20">
            <AppWindow size={18} />
          </div>
          <span className="font-semibold text-white/90 tracking-tight">TechFascicolo</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#funzioni" className="hover:text-white transition">Funzioni</a>
          <a href="#come-funziona" className="hover:text-white transition">Come funziona</a>
          <a href="#scarica" className="hover:text-white transition">Scarica</a>
        </nav>
        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/80">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
