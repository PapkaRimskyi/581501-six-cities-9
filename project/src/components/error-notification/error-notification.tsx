type ErrorNotificationType = {
  errText: string,
}

function ErrorNotification({ errText }: ErrorNotificationType) {
  return (
    <div style={{ paddingTop: '15px', textAlign: 'center', color: 'darkRed' }}>{errText}</div>
  );
}

export default ErrorNotification;
