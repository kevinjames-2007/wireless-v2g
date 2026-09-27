import { ArrowUpRight } from 'lucide-react'
import { project } from '@/lib/project'

export function ProjectLink() {
  if (!project.link) {
    return (
      <span className="inline-flex items-center rounded-md border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
        Link coming soon
      </span>
    )
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      {project.linkLabel}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  )
}
