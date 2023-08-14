import BookCard from '../../components/Book';
import { getBookIDs } from '../../hooks/getBookIDs';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

export default function Book({ book }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      <BookCard {...book} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getBookIDs();
  const data = paths.map((path) => {
    return {
      params: {
        book: String(path.id)
      }
    };
  });
  return {
    paths: data,
    fallback: false
  };
}

const BOOK = gql`
  query Book($id: ID!) {
    Book(id: $id) {
      id
      book_name
      author_name
      note
      date_added
    }
  }
`;
export async function getStaticProps({ params }) {
  const { data, error } = await client.query({ query: BOOK, variables: { id: params.book } });
  if (error) console.log('error fetching book');
  return {
    props: {
      book: data.Book
    }
  };
}