import ReqRejectType from '../../types/req-reject-type';

import { ERRORS_CODE } from '../../const/request-const';

function commentsErrorHandler({ status, method }: ReqRejectType) {
  switch (status) {
    case ERRORS_CODE['403']:
      return { code: status, errText: 'You cannot send comments.' };
    case ERRORS_CODE['408']:
      return { code: status, errText: 'Send request interrupted cause timeout. Try again.' };
    default:
      return { code: null, errText: 'Something went wrong!' };
  }
}

export default commentsErrorHandler;
