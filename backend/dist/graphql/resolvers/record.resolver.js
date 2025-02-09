import { recordQueries } from "../queries/record.query.js";
import { recordMutations } from "../mutations/record.mutation.js";
export const recordResolvers = {
    Query: {
        ...recordQueries,
    },
    Mutation: {
        ...recordMutations,
    },
};
