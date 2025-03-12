import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const activityQueries = {
    async getActivitiesById(_, { activityId }) {
        return await prisma.activity.findUnique({
            where: { id: activityId },
        });
    }
};
