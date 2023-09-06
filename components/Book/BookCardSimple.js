const BookCardSimple = ({ id, book_name, author_name, note, date_added }) => (
  <div key={id} className="rounded-md border border-gray-800 bg-gray-400 p-2 lg:w-1/2">
    <div>
      <h3>{book_name}</h3>
      <h2 className="mt-1 text-sm">{author_name}</h2>
      <p className="p-2 italic">{note}</p>
    </div>
    <div>
      <p className="text-xs">{new Date(date_added).toDateString()}</p>
    </div>
  </div>
);
export default BookCardSimple;
