import { ERRORS_CODE } from '../const/errors-code';

function handleReqErrors(errorCode: keyof typeof ERRORS_CODE) {
  const errCode = ERRORS_CODE[errorCode];
  return errCode ? `${errCode} error` : 'Ops. Error!';
}

export default handleReqErrors;
