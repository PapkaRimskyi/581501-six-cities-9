import ReqRejectType from '../../types/error-type/req-reject-type/req-reject-type';

import { ERRORS_CODE } from '../../const/request-const';

function commentsErrorHandler({ status }: ReqRejectType) {
  switch (status) {
    case ERRORS_CODE['403']:
      return { errText: 'You cannot send comments.' };
    case ERRORS_CODE['408']:
      return { errText: 'Send request interrupted cause timeout. Try again.' };
    default:
      return { errText: 'Something went wrong!' };
  }
}

export default commentsErrorHandler;
