import { Database } from "fakebase";
const db = new Database("./data");

export const Transaction = db.table("transactions");
