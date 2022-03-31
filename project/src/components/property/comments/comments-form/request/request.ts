import React from 'react';
import { sendDataRequest } from '../../../../../api/requests';

import sortCommentsByDate from '../../../../../util/sort-comments-by-date';
import commentsErrorHandler from '../../../../../errors/comments-error/comments-error';

import CommentType from '../../../../../types/offer-type/comment-type/comment-type';
import ReqRejectType from '../../../../../types/error-type/req-reject-type/req-reject-type';
import ErrorHandlerType from '../../../../../types/error-type/error-handler-type/error-handler-type';

import { API_ENDPOINT, MAX_COMMENTS } from '../../../../../const/request-const';

type FormDataType = {rating: string | null, comment: string};
type SetCommentsType = React.Dispatch<React.SetStateAction<CommentType[]>>;
type SetReqErrorType = React.Dispatch<React.SetStateAction<ErrorHandlerType | null>>;
type ResetFormFieldType = () => void;

function sendCommentsRequest(id: string, formData: FormDataType, setComments: SetCommentsType, setReqError: SetReqErrorType, resetFormFields: ResetFormFieldType ) {
  setReqError(null);

  sendDataRequest<CommentType[], FormDataType>(`${API_ENDPOINT.COMMENTS}/${id}`, formData)
    .then((commentsRes) => {
      const sortedComments = sortCommentsByDate(commentsRes.data);
      const tenComments = sortedComments.slice(0, MAX_COMMENTS);
      setComments(tenComments);
      resetFormFields();
    })
    .catch((e) => {
      const error = commentsErrorHandler(e as ReqRejectType);
      setReqError(error);
    });
}

export default sendCommentsRequest;
