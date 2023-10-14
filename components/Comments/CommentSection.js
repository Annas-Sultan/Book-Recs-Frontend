'use client';
import { Suspense } from 'react';
import Comments from './Comments';
import CommentSectionForm from './CommentSectionForm';
import LoadingCard from './LoadingCard';
import { ApolloWrapper } from '../../apollo-client';

const CommentSection = ({ id }) => {
  return (
    <ApolloWrapper>
      <section className="mt-4 rounded-md border  border-gray-800 bg-gray-400">
        <h2 className="mb-5 rounded-lg p-2 text-2xl font-bold">Discussion</h2>
        <div className="mx-4">
          <Suspense fallback={<LoadingCard />}>
            <Comments id={id} />
          </Suspense>
          <CommentSectionForm id={id} />
        </div>
      </section>
    </ApolloWrapper>
  );
};
export default CommentSection;
