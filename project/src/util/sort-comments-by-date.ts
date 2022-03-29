import CommentType from '../types/offer-type/comment-type/comment-type';

function sortCommentsByDate(comments: CommentType[]) {
  return comments.sort((a, b) => b.date.localeCompare(a.date));
}

export default sortCommentsByDate;
