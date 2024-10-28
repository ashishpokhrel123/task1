export class CustomError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    /** set prototype explicity */
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return { message: this.message };
  }
}
