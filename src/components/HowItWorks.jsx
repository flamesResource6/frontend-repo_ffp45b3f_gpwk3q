import { Upload, Wand2, Stamp } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: 'Carica i dossier', text: 'Fotografa o carica i documenti. Il sistema li ordina e ti suggerisce cosa manca.' },
    { icon: Wand2, title: 'Segui l’app', text: 'Istruzioni chiare e checklist dinamiche ti guidano al 100%.' },
    { icon: Stamp, title: 'Ottieni il fascicolo', text: 'Ricevi il fascicolo completo, pronto per l’uso e scaricabile.' },
  ]

  return (
    <section id="come-funziona" className="relative py-20 bg-[#0d0c18] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Come funziona</h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, text }, idx) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center mb-4">
                <Icon className="text-white" size={20} />
              </div>
              <div className="text-sm text-white/50">Step {idx + 1}</div>
              <h3 className="font-semibold text-lg mt-1">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
