import React, { ChangeEvent } from 'react';

type TextAreaProps = {
  reviewText: string,
  onChangeTextHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

function TextArea({ reviewText, onChangeTextHandler }: TextAreaProps) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={onChangeTextHandler}
      value={reviewText}
    />
  );
}

export default React.memo(TextArea);
