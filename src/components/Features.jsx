import { FileUp, CheckCircle2, Clock, Shield, Cloud, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: FileUp, title: 'Caricamento guidato', text: 'Importa i tuoi dossier in pochi passaggi, con controlli automatici di completezza.' },
    { icon: CheckCircle2, title: 'Validazione automatica', text: 'L’app verifica formati e requisiti tecnici, riducendo errori e tempi.' },
    { icon: Clock, title: 'Tracciamento in tempo reale', text: 'Monitora l’avanzamento del tuo fascicolo dall’upload alla consegna finale.' },
    { icon: Shield, title: 'Sicurezza al centro', text: 'Crittografia end‑to‑end e storage conforme alle normative europee.' },
    { icon: Cloud, title: 'Accesso ovunque', text: 'Prosegui dal web o dall’app, i tuoi progressi sono sempre sincronizzati.' },
    { icon: Sparkles, title: 'Esperienza smart', text: 'Suggerimenti intelligenti per completare ogni sezione senza dubbi.' },
  ]

  return (
    <section id="funzioni" className="relative py-20 bg-gradient-to-b from-[#0b0a13] to-[#0d0c18] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tutto ciò che serve per creare il tuo fascicolo</h2>
        <p className="text-white/70 mt-3 max-w-2xl">Un servizio digitale innovativo con un percorso chiaro, pensato per utenti privati B2C.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center mb-4">
                <Icon className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
