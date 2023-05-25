import { IllegalArgumentError } from "@/support/errors/errors";

export function validateSome<T>(obj: T) {
  if (!obj) throw IllegalArgumentError;
}
