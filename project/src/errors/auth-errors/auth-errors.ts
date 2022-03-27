import { ERRORS_CODE } from '../../const/request-const';

import ReqRejectType from '../../types/req-reject-type';

export type LoginErrorHandlerReturnType = ReturnType<typeof loginErrorHandler>;

export function loginErrorHandler({ status, method }: ReqRejectType) {
  switch (status) {
    case ERRORS_CODE['400']:
      return { code: status, errText: 'You should fill all fields and in correct form.' };
    case ERRORS_CODE['403']:
      return { code: status, errText: 'For some reason you cannot log in. Connect with support for more information.' };
    case ERRORS_CODE['408']:
      return { code: status, errText: 'Request interrupted cause timeout. Try again.' };
    default:
      return { code: null, errText: 'Something went wrong!' };
  }
}
