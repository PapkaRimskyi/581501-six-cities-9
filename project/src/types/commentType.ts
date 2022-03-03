import UserType from './userType';

type CommentType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: UserType,
}

export default CommentType;
