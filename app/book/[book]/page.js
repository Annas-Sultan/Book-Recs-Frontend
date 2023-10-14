import { gql } from '@apollo/client';
import { getClient } from '../../../apollo-server-client';

import { BookCardSimple } from '../../../components/Book';
import { getBookIDs } from '../../../hooks';
import { CommentSection } from '../../../components/Comments';

export default async function Book({ params }) {
  const client = getClient();

  const {
    data: { Book },
    error
  } = await client.query({
    query: BOOK,
    variables: { id: params.book }
  });
  if (error) {
    console.error('error fetching book');
    throw new Error(error.message);
  }
  return (
    <div className="m-4">
      <BookCardSimple {...Book} />
      <CommentSection {...Book} />
    </div>
  );
}
export async function generateStaticParams() {
  const bookIDs = await getBookIDs();
  return bookIDs.map((bookID) => ({
    book: bookID.id
  }));
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
