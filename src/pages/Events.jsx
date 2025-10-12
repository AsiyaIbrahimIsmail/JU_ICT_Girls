import { useMemo, useState } from "react";
import { CalendarDays, Search } from "lucide-react";

const demoEvents = [
  { id: 1, title: "Intro to React", date: "2025-10-15", location: "Lab A", type: "Workshop" },
  { id: 2, title: "Tailwind Workshop", date: "2025-11-02", location: "Lab B", type: "Workshop" },
  { id: 3, title: "Career Talk", date: "2025-11-20", location: "Auditorium", type: "Talk" },
  { id: 4, title: "Hack Night", date: "2025-10-28", location: "Room 3", type: "Hack" },
];

export default function Events() {
  const [query, setQuery] = useState("");
  const [after, setAfter] = useState("");

  const filtered = useMemo(() => {
    return demoEvents.filter((e) => {
      const matchesQuery = e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.location.toLowerCase().includes(query.toLowerCase()) ||
        e.type.toLowerCase().includes(query.toLowerCase());
      const matchesDate = after ? new Date(e.date) >= new Date(after) : true;
      return matchesQuery && matchesDate;
    });
  }, [query, after]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Events</h1>

      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <div className="col-span-2 flex items-center gap-2 rounded-md border bg-card px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, location, or type..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
          <input
            type="date"
            value={after}
            onChange={(e) => setAfter(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((e) => (
          <div key={e.id} className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-1 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {e.type}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {new Date(e.date).toDateString()} • {e.location}
            </p>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="rounded-md border bg-card p-6 text-sm text-muted-foreground">
            No events match your filters.
          </div>
        )}
      </div>
    </main>
  );
}


