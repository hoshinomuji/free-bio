import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import { Input } from '@base-ui/react/input';
import { Button } from '@base-ui/react/button';
import { Toast } from '@base-ui/react/toast';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-accent data-[invalid]:border-red-500/70';

function ContactFormInner({ email }: { email: string }) {
  const toast = Toast.useToastManager();

  return (
    <Form
      className="flex flex-col gap-5"
      onFormSubmit={(values) => {
        const { name, email: from, message } = values as Record<string, string>;
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        toast.add({ title: 'Opening your mail app', description: 'Thanks for reaching out!' });
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field.Root name="name" className="flex flex-col gap-1.5">
          <Field.Label className="text-sm text-zinc-300">Name</Field.Label>
          <Input required placeholder="Jane Doe" className={inputClass} />
          <Field.Error className="text-xs text-red-400" />
        </Field.Root>
        <Field.Root name="email" className="flex flex-col gap-1.5">
          <Field.Label className="text-sm text-zinc-300">Email</Field.Label>
          <Input required type="email" placeholder="jane@example.com" className={inputClass} />
          <Field.Error className="text-xs text-red-400" />
        </Field.Root>
      </div>
      <Field.Root name="message" className="flex flex-col gap-1.5">
        <Field.Label className="text-sm text-zinc-300">Message</Field.Label>
        <Field.Control
          required
          minLength={10}
          render={<textarea rows={5} />}
          placeholder="Tell me about your project..."
          className={inputClass}
        />
        <Field.Error className="text-xs text-red-400" />
      </Field.Root>
      <Button
        type="submit"
        className="self-start rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
      >
        Send message
      </Button>
    </Form>
  );
}

function Toasts() {
  const { toasts } = Toast.useToastManager();
  return (
    <Toast.Portal>
      <Toast.Viewport className="fixed right-4 bottom-4 z-50 flex w-80 flex-col gap-2">
        {toasts.map((t) => (
          <Toast.Root
            key={t.id}
            toast={t}
            className="rounded-lg border border-white/10 bg-zinc-900 p-4 shadow-xl transition-all duration-200 data-[ending-style]:translate-y-2 data-[ending-style]:opacity-0 data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0"
          >
            <Toast.Title className="text-sm font-medium text-white" />
            <Toast.Description className="mt-1 text-sm text-zinc-400" />
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

export default function ContactForm({ email }: { email: string }) {
  return (
    <Toast.Provider>
      <ContactFormInner email={email} />
      <Toasts />
    </Toast.Provider>
  );
}
