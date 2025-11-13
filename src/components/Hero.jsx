import Spline from '@splinetool/react-spline'
import { ArrowRight, Smartphone, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0a13]">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(140,91,255,0.35),rgba(10,10,20,0))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(56,189,248,0.15),rgba(10,10,20,0))]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 pt-28 pb-16 md:pt-36 grid md:grid-cols-2 items-center gap-10">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <ShieldCheck size={14} className="text-teal-300" />
              Servizio tecnico online, semplice e sicuro
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Il tuo fascicolo tecnico, passo dopo passo
            </h1>
            <p className="mt-5 text-white/70 text-lg md:text-xl max-w-xl">
              Carica i tuoi dossier, segui le istruzioni dell'app e ottieni il fascicolo finale validato. Un flusso guidato, innovativo e veloce pensato per privati (B2C).
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#scarica" className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-500 hover:bg-violet-400 text-white px-5 py-3 font-semibold shadow-lg shadow-violet-500/30 transition">
                Scarica l'app
                <Smartphone size={18} />
              </a>
              <a href="#come-funziona" className="inline-flex items-center justify-center gap-2 rounded-lg bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-100 px-5 py-3 font-semibold border border-fuchsia-400/30 transition">
                Come funziona
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
