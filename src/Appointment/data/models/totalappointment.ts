import { Int } from "../../../../../prisma/generated/prisma-client";

export class TotalAppoinmet {
  id: String;
  createdAt: String;
  updatedAt: String;
  total: Int;
  defaultTotal: Int;
  constructor(id: String, createAt: String, updateAt: String, total: Int, defaultTotal: Int) {
    this.id = id;
    this.createdAt = createAt;
    this.updatedAt = updateAt;
    this.total = total;
    this.defaultTotal = defaultTotal;

  }
}