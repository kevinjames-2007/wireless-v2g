import { project } from '@/lib/project'
import { ProjectLink } from '@/components/project-link'

export function Credits() {
  return (
    <section aria-labelledby="why-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 id="why-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Why it matters
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.whyItMatters}</p>
        </div>
        <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Made by
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {project.team.map((member) => (
                <li key={member.name} className="flex items-baseline justify-between gap-4">
                  <span className="text-lg font-medium">{member.name}</span>
                  {member.role && <span className="text-sm text-muted-foreground">{member.role}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border pt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Read more</h2>
            <div className="mt-3">
              <ProjectLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
