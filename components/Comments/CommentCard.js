const CommentCard = ({ comment, date_added, user_name }) => (
  <div className="my-2 rounded-lg bg-white p-2">
    <p>{comment}</p>
    <div className="flex justify-between pt-1 text-xs text-gray-800">
      <p>{user_name}</p>
      <p>{new Date(date_added).toDateString()}</p>
    </div>
  </div>
);
export default CommentCard;
