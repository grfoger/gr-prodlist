import { Types } from "mongoose";
import { IllegalArgumentError } from "@/support/errors/errors";
import {validateIsEnum, validateNotNullOrEmptyString} from "@/support/validation/validation.helpers";

export class Item {
  readonly id: Types.ObjectId;

  private name: string;

  private isComplete: boolean;

  private color: string;

  private constructor(
    id: Types.ObjectId,
    name: string,
    isComplete: boolean,
    color: string
  ) {
    this.id = id;
    this.name = name;
    this.isComplete = isComplete;
    this.color = color;
  }

  static getNew(name: string, color?: string) {
    validateNotNullOrEmptyString(name);
    color = !!color ? color : Color.WHITE;
    return new Item(new Types.ObjectId(), name, false, color);
  }

  setCompleteStatus() {
    if (this.isComplete)
      throw new IllegalArgumentError(
        `status of item ${this.id} is already complete`
      );
    this.isComplete = true;
  }

  changeName(newName: string) {
    validateNotNullOrEmptyString(newName);
    this.name = newName;
  }

  changeColor(newColor: Color) {
    validateIsEnum(Color, newColor);
    this.color = newColor;
  }
}

export enum Color {
  WHITE = "white",
  ORANGE = "orange",
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
  YELLOW = "yellow",
}