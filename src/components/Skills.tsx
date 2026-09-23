import { Tooltip } from '@base-ui/react/tooltip';

export default function Skills({ skills }: { skills: { name: string; note: string }[] }) {
  return (
    <Tooltip.Provider delay={150}>
      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <li key={s.name}>
            <Tooltip.Root>
              <Tooltip.Trigger className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200 transition-colors hover:border-accent/50 hover:text-white">
                {s.name}
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={8}>
                  <Tooltip.Popup className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-xs text-zinc-900 shadow-lg transition-[opacity,transform] duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
                    {s.note}
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </li>
        ))}
      </ul>
    </Tooltip.Provider>
  );
}
