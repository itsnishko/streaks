import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const recordMutations = {
    async createRecord(_, { activityId, createdBy }) {
        return await prisma.record.create({
            data: {
                activityId,
                createdBy,
                createdOn: new Date().toISOString(),
                updatedBy: createdBy,
                updatedOn: new Date().toISOString(),
            },
        });
    },
    async updateRecord(_, { id, activityId, updatedBy }) {
        return await prisma.record.update({
            where: { id },
            data: {
                activityId,
                updatedBy,
                updatedOn: new Date().toISOString(),
            },
        });
    },
};
