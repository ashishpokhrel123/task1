import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super(message, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class ValidationError extends CustomError {
  constructor(message = "Invalid Input") {
    super(message, 400);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class UnAuthorizedError extends CustomError {
  constructor(message = "UnAuthorized") {
    super(message, 401);
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }
}

export class InternalServerError extends CustomError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

export class ForbiddenError extends CustomError {
  constructor(message = "Permission denied") {
    super(message, 403);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
