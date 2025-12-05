"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 py-6">
      {/* Logo Header - outside container */}
      <div className="w-full max-w-5xl mb-4 px-4">
        <img
          src="/logos/logo.svg"
          alt="SIC-Q Agent Logo"
          className="h-8 w-auto dark:invert"
        />
      </div>

      {/* Main Chat Container */}
      <div className="mx-auto w-full max-w-5xl px-4">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>

      {/* Powered by Footer - outside container */}
      <div className="w-full max-w-5xl mt-4 px-4 text-center">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Powered by{" "}
          <a
            href="https://horizonsarchitecture.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            Horizons Architecture
          </a>
        </span>
      </div>
    </main>
  );
}
