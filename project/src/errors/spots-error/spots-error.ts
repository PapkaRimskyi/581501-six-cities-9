import ReqRejectType from '../../types/error-type/req-reject-type/req-reject-type';

import { ERRORS_CODE } from '../../const/request-const';

export function spotsErrorHandler({ status }: ReqRejectType) {
  switch (status) {
    case ERRORS_CODE['404']:
      return { errText: 'We cannot find spots for this place.' };
    case ERRORS_CODE['408']:
      return { errText: 'Request interrupted cause timeout. Try again.' };
    default:
      return { errText: 'Something went wrong!' };
  }
}
