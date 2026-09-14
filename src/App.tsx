import React from "react";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-sm">
          <Sparkles className="w-6 h-6 text-zinc-300" />
        </div>
        <h1 className="text-xl font-semibold text-zinc-100 tracking-tight">
          Pronto para começar
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Tudo anterior foi removido. Me diga exatamente o que você gostaria de criar ou como prefere fazer!
        </p>
      </div>
    </div>
  );
}

