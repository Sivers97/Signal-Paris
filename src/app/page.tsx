export default function Home() {
  return (
    <main className="min-h-screen p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-1">Signaux Paris X</h1>
      <p className="text-zinc-400 text-sm mb-8">
        Résumé des paris les plus cotés / probables
      </p>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-6">
        <h2 className="text-lg font-semibold mb-2">🔥 Résumé du moment</h2>
        <p className="text-white">Miami Heat (NBA)</p>
        <p className="text-sm text-zinc-400 mt-1">
          Le plus mentionné • Cote moyenne ≈ 1.75
        </p>
      </div>

      <div className="space-y-3">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <p className="font-medium">Miami -4 / Victoire</p>
          <p className="text-sm text-zinc-400">@JPronos23 • NBA</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <p className="font-medium">Miami OT @1.69</p>
          <p className="text-sm text-zinc-400">@theo69prono • NBA</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <p className="font-medium">BTTS + Over 2.5</p>
          <p className="text-sm text-zinc-400">Plusieurs tipsters • Football</p>
        </div>
      </div>
    </main>
  );
}
