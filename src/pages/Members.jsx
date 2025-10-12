import { useMemo, useState } from "react";
import { Users } from "lucide-react";

const demoMembers = [
  { id: 1, name: "Amina Ahmed", role: "Lead", track: "Web", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop" },
  { id: 2, name: "Sara Ibrahim", role: "Coordinator", track: "Data", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=128&auto=format&fit=crop" },
  { id: 3, name: "Hawa Ali", role: "Member", track: "Mobile", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128&auto=format&fit=crop" },
  { id: 4, name: "Layla Yusuf", role: "Member", track: "Cyber", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&auto=format&fit=crop" },
  { id: 5, name: "Nimo Farah", role: "Coordinator", track: "Web", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=128&auto=format&fit=crop" },
];

const tracks = ["All", "Web", "Data", "Mobile", "Cyber"];

export default function Members() {
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    if (selected === "All") return demoMembers;
    return demoMembers.filter((m) => m.track === selected);
  }, [selected]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Our Members</h1>
        <div className="hidden items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm text-muted-foreground sm:flex">
          <Users className="h-4 w-4" />
          <span>{demoMembers.length} members</span>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {tracks.map((t) => (
          <button
            key={t}
            onClick={() => setSelected(t)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              selected === t ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((m) => (
          <div key={m.id} className="group rounded-lg border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <div className="mb-3 h-24 w-24 overflow-hidden rounded-full">
              <img src={m.avatar} alt={m.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role} • {m.track}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


