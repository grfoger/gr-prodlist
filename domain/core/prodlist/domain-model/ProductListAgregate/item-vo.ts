import { Types } from "mongoose";
import {IllegalArgumentError} from "@/support/errors/errors";

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
}

export enum Color {
  WHITE = "white",
}
