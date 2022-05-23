import { Transaction } from "./db.js";

export const resolvers = {
  Query: {
    transactions: () => Transaction.findAll(),
    transaction: (_root, { id }) => Transaction.findById(id),
  },
  Transaction: {
    __resolveReference: (representation) => {
      console.log(representation);
      return Transaction.findById(representation.id);
    },
  },
};
