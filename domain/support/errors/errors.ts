export class IllegalArgumentError extends Error {
  constructor(message) {
    super(message);
  }
}

export class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}
