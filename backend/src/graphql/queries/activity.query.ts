import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const activityQueries = {
  async getActivities(_: any, { activityId }: { activityId: string }) {
    return await prisma.record.findMany({
      where: { activityId },
    });
  },
};
