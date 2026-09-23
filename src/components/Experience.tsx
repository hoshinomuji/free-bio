import { Accordion } from '@base-ui/react/accordion';

type Job = { role: string; company: string; period: string; points: string[] };

export default function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <Accordion.Root defaultValue={[0]} className="divide-y divide-white/10 rounded-xl border border-white/10">
      {jobs.map((job, i) => (
        <Accordion.Item key={job.company + job.role} value={i}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03]">
              <div>
                <p className="font-medium text-white">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </p>
                <p className="mt-1 text-sm text-zinc-500">{job.period}</p>
              </div>
              <svg
                className="size-4 shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-200 data-[ending-style]:h-0 data-[starting-style]:h-0">
            <ul className="list-disc space-y-2 px-6 pb-5 pl-10 text-sm text-zinc-400 marker:text-accent">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
