export default function AccessDenied() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-md rounded-xl bg-white px-8 py-6 text-center shadow-lg dark:bg-slate-900">
        <div className="mb-4 text-5xl"></div>
        <h1 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
          Access Denied
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          A valid token is required to access this application.
        </p>
      </div>
    </main>
  );
}
