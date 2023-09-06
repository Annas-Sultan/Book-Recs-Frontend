import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { BookCardSimple } from '../../components/Book';
import { getBookIDs } from '../../hooks';
import { CommentSection } from '../../components/Comments';

export default function Book({ book }) {
  return (
    <div className="m-4">
      <BookCardSimple {...book} />
      <CommentSection {...book} />
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
    fallback: 'blocking'
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
  const { data, error } = await client.query({
    query: BOOK,
    variables: { id: params.book }
  });
  if (error) {
    console.log('error fetching book');
    throw new Error(error.message);
  }
  return {
    props: {
      book: data.Book
    }
  };
}
