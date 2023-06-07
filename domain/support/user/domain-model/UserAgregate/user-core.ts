import { Types } from "mongoose";

export class User {
  private id: Types.ObjectId;

  private name: string;

  private constructor(id: Types.ObjectId, name: string) {
    this.id = id;
    this.name = name;
  }
}
