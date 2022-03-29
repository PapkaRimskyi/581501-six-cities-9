import React, {ChangeEvent, MouseEvent, useCallback, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import sendCommentsRequest from './request/request';

import RatingStars from './rating-stars/rating-stars';
import TextArea from './text-area/text-area';
import ErrorNotification from '../../../notifications/error-notification/error-notification';

import CommentType from '../../../../types/offer-type/comment-type/comment-type';
import ErrorHandlerType from '../../../../types/error-type/error-handler-type/error-handler-type';

const MIN_LETTERS = 50;
const MAX_LETTERS = 300;

type CommentsFormProps = {
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>,
};

function CommentsForm({ setComments }: CommentsFormProps) {
  const [reviewStars, setReviewStars] = useState<string | null>(null);
  const [reviewText, setReviewText] = useState<string>('');
  const [reqError, setReqError] = useState<ErrorHandlerType | null>(null);

  const param = useParams();

  const onChangeRatingHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => setReviewStars(e.target.value), []);
  const onChangeTextHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setReviewText(e.target.value), []);

  useEffect(() => () => resetFormFields(), [param.id]);

  function sendFormHandler(e: MouseEvent) {
    e.preventDefault();
    const id = param.id as string;
    const formData = { rating: reviewStars, comment: reviewText };
    sendCommentsRequest(id, formData, setComments, setReqError, resetFormFields);
  }

  function returnSubmitButtonStatus() {
    return !(reviewStars && reviewText.length > MIN_LETTERS && reviewText.length < MAX_LETTERS);
  }

  function resetFormFields() {
    setReviewStars(null);
    setReviewText('');
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <RatingStars reviewStars={reviewStars} onChangeRatingHandler={onChangeRatingHandler} />

      <TextArea reviewText={reviewText} onChangeTextHandler={onChangeTextHandler} />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={returnSubmitButtonStatus()} onClick={sendFormHandler}>Submit</button>
      </div>
      {reqError && <ErrorNotification errText={reqError.errText} />}
    </form>
  );
}

export default CommentsForm;
