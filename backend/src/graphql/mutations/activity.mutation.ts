import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const activityMutations = {
    createActivity: async (_: any, { name, description, isActive }: { name: string; description: string; isActive: boolean }) => {
        try {
            const newActivity = await prisma.activity.create({
                data: {
                    id: Math.random().toString(36).substring(7), 
                    name : name,
                    description: description,
                    isActive : isActive,
                    createdOn: new Date().toISOString(),
                    createdBy: "nishant",
                    updatedBy: "nishant",
                    updatedOn: new Date().toISOString(),
                },
            });

            return newActivity;
        } catch (error) {
            console.error("Error creating activity:", error);
            throw new Error("Failed to create activity");
        }
    }
};
