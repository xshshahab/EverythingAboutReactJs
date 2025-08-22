import React, { useEffect, useMemo, useState } from "react";

interface UserState {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
}

const gradients = [
  "from-cyan-500 to-blue-500",
  "from-purple-500 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-sky-500",
];

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

function pickGradient(seed: number) {
  return gradients[seed % gradients.length];
}

const SkeletonCard = () => (
  <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-white/10 animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="w-40 h-3 rounded bg-white/10 animate-pulse" />
        <div className="w-24 h-3 rounded bg-white/10 animate-pulse" />
      </div>
    </div>
    <div className="mt-5 space-y-2">
      <div className="w-full h-3 rounded bg-white/10 animate-pulse" />
      <div className="w-2/3 h-3 rounded bg-white/10 animate-pulse" />
    </div>
    <div className="h-8 mt-5 rounded-full w-28 bg-white/10 animate-pulse" />
  </div>
);

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserState[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => (r.ok ? r.json() : Promise.reject("Failed to fetch")))
      .then(setUsers)
      .catch(() => setErr("Unable to load users."));
  }, []);

  const content = useMemo(() => {
    if (err) {
      return (
        <div className="flex items-center justify-center col-span-full">
          <div className="px-4 py-3 text-red-200 border rounded-xl border-red-500/30 bg-red-500/10">
            {err}
          </div>
        </div>
      );
    }
    if (!users) {
      return Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />);
    }
    return users.map((user) => {
      const grad = pickGradient(user.id);
      return (
        <article
          key={user.id}
          className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
        >
          {/* soft edge glow */}
          <div className="absolute transition-opacity duration-300 opacity-0 pointer-events-none -inset-px rounded-2xl blur-2xl group-hover:opacity-100 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
          <header className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`relative h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${grad} text-black grid place-items-center font-black`}
              >
                <span className="drop-shadow-sm">
                  {initials(user.name).toUpperCase()}
                </span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
              </div>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  {user.name}
                </h2>
                <p className="text-xs text-white/60">@{user.username}</p>
              </div>
            </div>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs transition border rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
            >
              Visit
            </a>
          </header>

          <div className="grid grid-cols-1 gap-3 mt-5 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xs rounded-md bg-white/5">
                📧
              </span>
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xs rounded-md bg-white/5">
                📱
              </span>
              <span className="truncate">{user.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xs rounded-md bg-white/5">
                📍
              </span>
              <span className="truncate">
                {user.address.street}, {user.address.suite}, {user.address.city}{" "}
                — {user.address.zipcode}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-5">
            <span className="px-3 py-1 text-xs border rounded-full border-white/10 bg-white/5 text-white/80">
              {user.company.name}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/60">
              {user.company.bs}
            </span>
          </div>

          <blockquote className="p-3 mt-4 text-xs italic border rounded-xl border-white/10 bg-black/20 text-white/70">
            “{user.company.catchPhrase}”
          </blockquote>

          {/* coords footer */}
          <footer className="mt-5 flex items-center justify-between text-[11px] text-white/50">
            <span>Lat: {user.address.geo.lat}</span>
            <span>Lng: {user.address.geo.lng}</span>
          </footer>
        </article>
      );
    });
  }, [users, err]);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* page chrome */}
      <div className="sticky top-0 z-10 border-b border-white/5 bg-[#0b0b0f]/70 backdrop-blur-xl">
        <div className="max-w-6xl px-5 py-4 mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Users Directory
            </span>
          </h1>
          <p className="mt-1 text-xs text-white/50">Clean • Minimal • Dark</p>
        </div>
      </div>

      <main className="max-w-6xl px-5 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content}
        </div>
      </main>
    </div>
  );
};

export default UserList;
