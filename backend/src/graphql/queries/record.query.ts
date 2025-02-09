import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const recordQueries = {
  async getRecords(_: any, { activityId }: { activityId: string }) {
    return await prisma.record.findMany({
      where: { activityId },
    });
  },
};
