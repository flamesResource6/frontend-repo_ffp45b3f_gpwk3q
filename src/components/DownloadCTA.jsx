import { Apple, Smartphone, Play } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section id="scarica" className="relative py-20 bg-gradient-to-b from-[#0d0c18] to-black text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 overflow-hidden relative">
          <div className="absolute -inset-1 opacity-20 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500 via-violet-500 to-sky-400 blur-2xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Scarica l’app e inizia ora</h2>
            <p className="text-white/70 mt-3 max-w-2xl">Disponibile per iOS e Android. Accedi con il tuo account e riprendi dal punto esatto in cui eri dal web.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-violet-500 hover:bg-violet-400 text-white px-5 py-3 font-semibold shadow-lg shadow-violet-500/30 transition">
                <Apple size={18} />
                App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-5 py-3 font-semibold shadow-lg shadow-fuchsia-500/30 transition">
                <Play size={18} />
                Google Play
              </a>
            </div>
            <p className="mt-4 text-white/60 text-sm inline-flex items-center gap-2">
              <Smartphone size={16} className="text-fuchsia-300" />
              Link diretto per il download inviato anche via email
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
