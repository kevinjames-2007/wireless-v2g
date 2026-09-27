import { Hero } from '@/components/hero'
import { PowerFlow } from '@/components/power-flow'
import { ControlLogic } from '@/components/control-logic'
import { Credits } from '@/components/credits'
import { project } from '@/lib/project'

export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <PowerFlow />
        <ControlLogic />
        <Credits />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 font-mono text-xs text-muted-foreground">
          {project.shortTitle} · {project.team.map((m) => m.name).join(', ')}
        </div>
      </footer>
    </>
  )
}
