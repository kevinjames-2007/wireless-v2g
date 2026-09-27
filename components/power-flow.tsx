import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const modes = [
  {
    id: 'g2v',
    label: 'G2V',
    name: 'Grid-to-Vehicle',
    description:
      'Power supply drives the transmitter coil. The magnetic field induces current in the receiver coil, which charges the battery — no physical connector.',
    chain: ['Power supply', 'Tx coil', 'Rx coil', 'Battery'],
    accent: 'text-g2v',
    border: 'border-g2v/40',
  },
  {
    id: 'v2g',
    label: 'V2G',
    name: 'Vehicle-to-Grid',
    description:
      'Stored energy flows back out. A boost converter steps the battery voltage up to drive a load — here, an RC car standing in for the grid.',
    chain: ['Battery', 'Boost converter', 'Load (RC car)'],
    accent: 'text-v2g',
    border: 'border-v2g/40',
  },
]

export function PowerFlow() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 id="how-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
          Two directions of power flow
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The same battery acts as both a sink and a source, demonstrating bidirectional charging.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {modes.map((mode) => (
            <article key={mode.id} className={cn('flex flex-col gap-5 rounded-xl border bg-card p-6', mode.border)}>
              <div className="flex items-baseline gap-3">
                <span className={cn('font-mono text-sm font-semibold', mode.accent)}>{mode.label}</span>
                <h3 className="text-lg font-medium">{mode.name}</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">{mode.description}</p>
              <ol className="mt-auto flex flex-wrap items-center gap-2 font-mono text-xs" aria-label={`${mode.name} power path`}>
                {mode.chain.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-border bg-secondary px-2.5 py-1.5">{step}</span>
                    {i < mode.chain.length - 1 && (
                      <ArrowRight className={cn('size-3.5', mode.accent)} aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
