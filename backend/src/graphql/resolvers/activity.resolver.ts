import { activityMutations } from "../mutations/activity.mutation.js";
import { activityQueries } from "../queries/activity.query.js";

export const activityResolver = {
  Query: {
    ...activityQueries,
  },
  Mutation: {
    ...activityMutations,
  },
};
