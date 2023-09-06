'use client';
import Comments from './Comments';
import CommentSectionForm from './CommentSectionForm';

const CommentSection = ({ id }) => {
  return (
    <section className="mt-4 rounded-md border  border-gray-800 bg-gray-400">
      <h2 className="mb-5 rounded-lg p-2 text-2xl font-bold">Discussion</h2>
      <div className="mx-4">
        <Comments id={id} />
        <CommentSectionForm id={id} />
      </div>
    </section>
  );
};
export default CommentSection;
