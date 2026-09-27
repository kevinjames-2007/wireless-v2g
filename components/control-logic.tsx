const components = [
  { name: 'Tx / Rx coils', detail: 'Inductive link that transfers power across an air gap.' },
  { name: 'Battery', detail: 'Energy store charged in G2V and drained in V2G.' },
  { name: 'Boost converter', detail: 'Steps battery voltage up to drive the output load.' },
  { name: 'INA219', detail: 'Measures bus voltage and current to track battery state.' },
  { name: 'ESP32', detail: 'Reads the sensor and switches between charge and discharge.' },
  { name: 'RC car', detail: 'Demonstration load for the discharge (V2G) path.' },
]

export function ControlLogic() {
  return (
    <section aria-labelledby="system-heading" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-5 md:py-20">
        <div className="md:col-span-2">
          <h2 id="system-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Automatic mode switching
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            An ESP32 continuously reads battery state from an INA219 sensor and decides on its own whether the
            system should be charging or discharging.
          </p>
          <pre
            className="mt-6 overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-xs leading-relaxed"
            aria-label="Simplified control loop"
          >
            <code>
              <span className="text-muted-foreground">{'// simplified control loop'}</span>
              {'\n'}
              {'v = ina219.busVoltage()\n'}
              {'if (v < LOW)  '}
              <span className="text-g2v">{'mode = G2V'}</span>
              {'\n'}
              {'if (v > HIGH) '}
              <span className="text-v2g">{'mode = V2G'}</span>
            </code>
          </pre>
        </div>

        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 md:col-span-3">
          {components.map((c) => (
            <div key={c.name} className="flex flex-col gap-1.5 bg-background p-5">
              <dt className="font-mono text-sm font-medium">{c.name}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{c.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
