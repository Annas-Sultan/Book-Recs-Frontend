import { gql } from '@apollo/client';
import client from '../../apollo-client';
import BookCard from '../../components/Book';

export async function getStaticProps() {
  const { data, error } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Books {
        Books {
          id
          book_name
          author_name
          note
          date_added
        }
      }
    `
  });
  if (error) console.log('error');
  return {
    props: {
      books: data.Books
    },
    revalidate: 10
  };
}

export default function Books({ books }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 lg:max-w-7xl lg:px-8">
      <h2 className="w-2/5 rounded-lg border border-gray-800 bg-gray-400 p-2 text-2xl font-bold md:w-1/5">
        My Books
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {books.map((product) => (
          <BookCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
