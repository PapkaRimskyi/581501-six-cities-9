import React from 'react';
import { sendDataRequest } from '../../../../../api/requests';

import sortCommentsByDate from '../../../../../util/sort-comments-by-date';
import commentsErrorHandler from '../../../../../errors/comments-error/comments-error';

import CommentType from '../../../../../types/comment-type';
import ReqRejectType from '../../../../../types/req-reject-type';

import { API_ENDPOINT, MAX_COMMENTS } from '../../../../../const/request-const';

type FormDataType = {rating: string | null, comment: string};
type SetCommentsType = React.Dispatch<React.SetStateAction<CommentType[]>>;
type ResetFormFieldType = () => void;
type SetReqError = React.Dispatch<React.SetStateAction<{code: number, errText: string} | {code: null, errText: string}>>;

function sendCommentsRequest(id: string, formData: FormDataType, setComments: SetCommentsType, resetFormFields: ResetFormFieldType, setReqError: SetReqError ) {
  setReqError({ code: null, errText: '' });

  sendDataRequest<CommentType[], typeof formData>(`${API_ENDPOINT.COMMENTS}/${id}`, formData)
    .then((commentsRes) => {
      const sortedComments = sortCommentsByDate(commentsRes.data);
      setComments(sortedComments.slice(0, MAX_COMMENTS));
      resetFormFields();
    })
    .catch((e) => {
      const error = commentsErrorHandler(e as ReqRejectType);
      setReqError(error);
      throw new Error();
    });
}

export default sendCommentsRequest;
