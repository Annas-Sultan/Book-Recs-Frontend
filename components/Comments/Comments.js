import { gql, useQuery } from '@apollo/client';
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
  const { data, loading, error } = useQuery(CommentQuery, { variables: { bookId: id } });
  if (loading) return 'Loading Comments...';
  if (error) return 'Error Fetching Comments';
  if (data.Comments.length === 0)
    return <div className="my-3">Start the discussion by posting a comment!</div>;
  return (
    <>
      {data.Comments.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </>
  );
};
export default Comments;
