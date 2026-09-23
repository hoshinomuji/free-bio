import { Tabs } from '@base-ui/react/tabs';
import type { Project } from '../data/site';

const filters = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'tool', label: 'Tools' },
  { value: 'design', label: 'Design' },
] as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/40 hover:bg-white/[0.04]">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-4 text-sm">
        {project.href && (
          <a href={project.href} className="text-zinc-200 hover:text-accent">
            Live ↗
          </a>
        )}
        {project.repo && (
          <a href={project.repo} className="text-zinc-200 hover:text-accent">
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Tabs.Root defaultValue="all">
      <Tabs.List className="relative mb-8 inline-flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
        {filters.map((f) => (
          <Tabs.Tab
            key={f.value}
            value={f.value}
            className="relative z-10 rounded-md px-4 py-1.5 text-sm text-zinc-400 transition-colors hover:text-white data-[active]:text-zinc-950"
          >
            {f.label}
          </Tabs.Tab>
        ))}
        <Tabs.Indicator className="absolute top-[var(--active-tab-top)] left-[var(--active-tab-left)] z-0 h-[var(--active-tab-height)] w-[var(--active-tab-width)] rounded-md bg-accent transition-all duration-200" />
      </Tabs.List>
      {filters.map((f) => (
        <Tabs.Panel key={f.value} value={f.value} className="grid gap-5 sm:grid-cols-2">
          {projects
            .filter((p) => f.value === 'all' || p.category === f.value)
            .map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
