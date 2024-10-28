export function isValidEmail(email: string) {
  const expression = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

  return expression.test(email);
}