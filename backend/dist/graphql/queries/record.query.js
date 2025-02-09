import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const recordQueries = {
    async getRecords(_, { activityId }) {
        return await prisma.record.findMany({
            where: { activityId },
        });
    },
};
