import CommentType from '../types/comment-type';

function sortCommentsByDate(comments: CommentType[]) {
  return comments.sort((a, b) => b.date.localeCompare(a.date));
}

export default sortCommentsByDate;
