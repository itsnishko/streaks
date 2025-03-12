import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const activityQueries = {
  async getActivitiesById(_: any, { activityId }: { activityId: string }) {
    return await prisma.activity.findUnique({
      where: { id: activityId },
    });
  }
};
