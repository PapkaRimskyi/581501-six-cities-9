function validateLoginForm(password: string) {
  return (/\d/.test(password) && /[a-zA-Z]/.test(password));
}

export default validateLoginForm;
