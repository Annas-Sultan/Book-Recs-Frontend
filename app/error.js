'use client';

export default function Error({ error }) {
  return (
    <section className="flex h-80 items-center justify-center">
      <div className="rounded-lg border border-black bg-stone-400">
        <h1 className="p-2 text-center text-lg text-red-600 md:p-3 md:text-2xl">
          An error has occured: {error.message}
        </h1>
      </div>
    </section>
  );
}
