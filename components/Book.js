import Link from 'next/link';

const BookCard = ({ id, book_name, author_name, note, date_added }) => (
  <div
    key={id}
    className="group relative flex flex-col justify-between rounded-md border border-gray-800 bg-gray-400 p-2">
    <div>
      <h3>{book_name}</h3>
      <h2 className="mt-1 text-sm">{author_name}</h2>
      <p className="p-2 italic">{note}</p>
    </div>
    <div className="flex justify-between">
      <p className="text-xs">{new Date(date_added).toDateString()}</p>
      <Link href={`/book/${id}`}>
        <a className="underline">More Info</a>
      </Link>
    </div>
  </div>
);
export default BookCard;
