import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Contact us</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Name</label>
          <input className="w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input type="email" className="w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label className="mb-1 block text-sm">Message</label>
          <textarea className="w-full rounded-md border px-3 py-2" rows="4" />
        </div>
        <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Send</button>
        {sent && <p className="text-sm text-secondary">Thanks, we'll reply soon.</p>}
      </form>
    </main>
  );
}


