import { gql, useSuspenseQuery } from '@apollo/client';
import CommentCard from './CommentCard';
export const CommentQuery = gql`
  query Query($bookId: ID!) {
    Comments(bookId: $bookId) {
      comment
      date_added
      id
      user_name
    }
  }
`;
const Comments = ({ id }) => {
  const { data, error } = useSuspenseQuery(CommentQuery, { variables: { bookId: id } });
  if (error) return <p>Error Fetching Comments</p>;
  if (data.Comments.length === 0)
    return <p className="my-3">Start the discussion by posting a comment!</p>;
  return (
    <>
      {data.Comments.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </>
  );
};
export default Comments;
