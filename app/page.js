import Link from 'next/link';

const Home = () => (
  <div className="mx-8 mt-12 flex h-80 flex-col items-center justify-center bg-slate-600 p-1 md:mx-12 md:mt-24">
    <div className="rounded-lg border border-stone-400 bg-stone-400">
      <h1 className="p-1 text-center text-lg md:p-3 md:text-2xl">{`Annas's Book Recommendations!`}</h1>
    </div>
    <ul className="flex flex-col gap-y-2 pt-8 text-base md:flex-row">
      <li className="rounded-lg border border-stone-400 bg-stone-400 p-2 underline md:p-4">
        <Link href="/books">See Recommendations</Link>
      </li>
      <li className="rounded-lg border border-stone-400 bg-stone-400 p-2 underline md:ml-4 md:p-4">
        <Link href="/recommend">Recommend Me A Book!</Link>
      </li>
    </ul>
  </div>
);
export default Home;
