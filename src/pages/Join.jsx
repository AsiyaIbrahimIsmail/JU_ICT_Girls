import { useState } from "react";

export default function Join() {
  const [status, setStatus] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setStatus("Thanks! We'll reach out soon.");
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Join JU-ICT Girls</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Full name</label>
          <input className="w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input type="email" className="w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label className="mb-1 block text-sm">Interest</label>
          <select className="w-full rounded-md border px-3 py-2">
            <option>Web</option>
            <option>Mobile</option>
            <option>Data</option>
            <option>Cyber</option>
          </select>
        </div>
        <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Submit</button>
        {status && <p className="text-sm text-secondary">{status}</p>}
      </form>
    </main>
  );
}


