import { ERRORS_CODE } from '../../const/request-const';

import ReqRejectType from '../../types/error-type/req-reject-type/req-reject-type';

function loginErrorHandler({ status }: ReqRejectType) {
  switch (status) {
    case ERRORS_CODE['400']:
      return { errText: 'You should fill all fields and in correct form.' };
    case ERRORS_CODE['403']:
      return { errText: 'For some reason you cannot log in. Connect with support for more information.' };
    case ERRORS_CODE['408']:
      return { errText: 'Request interrupted cause timeout. Try again.' };
    default:
      return { errText: 'Something went wrong!' };
  }
}

export default loginErrorHandler;
