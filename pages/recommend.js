import { useRouter } from 'next/router';

const RecomendationForm = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const params = {
      bookName: e.target.bookName.value,
      authorName: e.target.authorName.value,
      note: e.target.note.value
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recommend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });
      const book = await res.json();
      router.push(`/book/${book.id}`);
    } catch (err) {
      console.error('Error saving recommendation');
    }
  };

  const fieldStyle = 'flex flex-col gap-2 py-2';
  const inputStyle = 'bg-slate-200 flex-auto rounded-md p-1';

  return (
    <section className="mx-auto max-w-2xl px-4 py-8 lg:max-w-7xl lg:px-8">
      <h2 className="mb-8 max-w-fit rounded-lg border border-gray-800 bg-gray-400 p-2 text-2xl font-bold">
        Recommend Me A Book!
      </h2>
      <form onSubmit={onSubmit} className="rounded-md bg-gray-400 p-2">
        <div className={fieldStyle}>
          <label htmlFor="bookName">Book title:</label>
          <input type="text" id="bookName" title="bookName" className={inputStyle} required />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="authorName">Author: </label>
          <input type="text" id="authorName" title="authorName" className={inputStyle} required />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="note">What did you like about this book? </label>
          <textarea id="note" title="note" className={inputStyle} />
        </div>
        <button type="submit" className="mt-2 rounded-full bg-white p-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default RecomendationForm;
