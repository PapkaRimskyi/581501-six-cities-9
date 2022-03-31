import UserType from '../user-type/user-type';

type CommentType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: UserType,
}

export default CommentType;
