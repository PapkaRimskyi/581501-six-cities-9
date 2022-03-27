import React from 'react';

import CommentsList from './comments-list/comments-list';
import CommentsForm from './comments-form/comments-form';

import useAppSelector from '../../../hooks/use-app-selector';

import CommentType from '../../../types/comment-type';

import AUTH_STATUS from '../../../const/auth-status';

type CommentsProps = {
  comments: CommentType[],
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>,
}

function Comments({ comments, setComments }: CommentsProps) {
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <CommentsList comments={comments} />
      {authStatus === AUTH_STATUS.AUTHORIZED && <CommentsForm setComments={setComments} />}
    </section>
  );
}

export default Comments;
