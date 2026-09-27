import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { project } from '@/lib/project'
import { ProjectLink } from '@/components/project-link'

export function Hero() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Student project · Power electronics
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Wireless charging that{' '}
            <span className="text-g2v">flows both ways</span>.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap items-center gap-3">
            <ProjectLink />
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
              <ArrowUpRight className="size-4 rotate-90" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <Image
            src="/images/prototype.png"
            alt="The prototype on a workbench: stacked transmitter and receiver coils, an ESP32, INA219 sensor, battery pack, boost converter and an RC car."
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}
