import { ValidationError } from "@/support/errors/errors";
import { isObjectIdOrHexString, Types } from "mongoose";

export function validateExample<T>(obj: T) {
  if (!obj) throw ValidationError;
}

export function validateObjectId(obj: Types.ObjectId | string) {
  validateNotNull(obj);
  if (!isObjectIdOrHexString(obj))
    throw new ValidationError("value is not ObjectId");
}

export function validateNotNull(obj) {
  if (!obj) throw new ValidationError("value is null or undefined");
}

export function validateNotNullOrEmptyString(obj: string) {
  validateNotNull(obj);
  if (obj.length < 1) throw new ValidationError("value is not valid string");
}

function isEnumValueOfType(enumType: any, value: any) {
  return Object.values(enumType)?.includes(value);
}

export function validateIsEnum(enumType, obj) {
  validateNotNull(obj);
  if (!isEnumValueOfType(enumType, obj))
    throw new ValidationError("value is not enum");
}

export function validateIsCorrectType(typeClass, obj) {
  if (obj.constructor != typeClass)
    throw new ValidationError(`value is not type of ${typeClass.name}`);
}
