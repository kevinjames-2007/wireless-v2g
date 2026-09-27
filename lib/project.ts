export type TeamMember = {
  name: string
  role?: string
}

export const project = {
  title: 'Wireless V2G/G2V EV Charging Prototype',
  shortTitle: 'Wireless V2G / G2V',
  summary:
    'A small-scale EV charging system that wirelessly charges a battery using electromagnetic induction, then discharges that stored power back out through a boost converter to drive an RC car.',
  whyItMatters:
    'It demonstrates bidirectional wireless EV charging — a real-world concept being explored for grid resilience — at a buildable student-project scale.',
  // Set this to your repo, doc, or report URL. Leave as null to show "Link coming soon".
  link: null as string | null,
  linkLabel: 'View the project',
  team: [
    { name: 'Kevin James', role: 'Creator' },
    // Add co-creators here, e.g. { name: 'Jane Doe', role: 'Firmware' },
  ] satisfies TeamMember[],
}
