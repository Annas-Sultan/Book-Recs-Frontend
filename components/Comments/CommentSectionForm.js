'use client';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { CommentQuery } from './Comments';

const CommentMutation = gql`
  mutation Mutation($input: CommentInput!) {
    postComment(input: $input) {
      id
      deleted
      date_added
      comment
      user_name
    }
  }
`;
const CommentSectionForm = ({ id }) => {
  const [comment, setComment] = useState('');
  const [mutateFunction, { loading, error }] = useMutation(CommentMutation, {
    refetchQueries: [{ query: CommentQuery, variables: { bookId: id } }],
    onCompleted: () => setComment('')
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      target: { username }
    } = e;
    if (!comment) return;
    mutateFunction({
      variables: {
        input: {
          comment: comment,
          username: username.value,
          bookId: id
        }
      }
    });
  };
  if (error) console.error(error.message);
  return (
    <form onSubmit={onSubmit} className="mx-3">
      <div className="mb-2 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          value={comment}
          disabled={loading}
          required
          id="comment"
          rows="3"
          className="w-full border-0 px-0 text-sm text-gray-900 invalid:border-red-500 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a comment..."
          onChange={(e) => setComment(e.target.value)}></textarea>
      </div>
      <div className="mb-2 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <label htmlFor="username" className="sr-only">
          User name
        </label>
        <input
          className="border-0 px-0 text-sm text-gray-900 invalid:border-red-500 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          type="text"
          id="username"
          title="username"
          placeholder="Display Name"
          required
        />
      </div>
      <button
        className="mb-2 inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-center text-xs font-medium hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900"
        type="submit"
        disabled={loading}>
        {loading ? 'Posting...' : 'Post comment'}
      </button>
    </form>
  );
};
export default CommentSectionForm;
