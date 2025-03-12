import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const activityMutations = {
    createActivity: async (_, { name, description, isActive }) => {
        try {
            const newActivity = await prisma.activity.create({
                data: {
                    id: Math.random().toString(36).substring(7),
                    name: name,
                    description: description,
                    isActive: isActive,
                    createdOn: new Date().toISOString(),
                    createdBy: "nishant",
                    updatedBy: "nishant",
                    updatedOn: new Date().toISOString(),
                },
            });
            return newActivity;
        }
        catch (error) {
            console.error("Error creating activity:", error);
            throw new Error("Failed to create activity");
        }
    },
    updateActivity: async (_, { id, name, description, isActive }) => {
        try {
            const existingActivity = await prisma.activity.findUnique({
                where: { id },
            });
            if (!existingActivity) {
                throw new Error("Activity not found");
            }
            const updatedActivity = await prisma.activity.update({
                where: { id },
                data: {
                    name: name ?? existingActivity.name,
                    description: description ?? existingActivity.description,
                    isActive: isActive ?? existingActivity.isActive,
                    updatedBy: "nishant",
                    updatedOn: new Date().toISOString(),
                },
            });
            return updatedActivity;
        }
        catch (error) {
            console.error("Error updating activity:", error);
            throw new Error("Failed to update activity");
        }
    }, deleteActivity: async (_, { id }) => {
        try {
            const existingActivity = await prisma.activity.findUnique({
                where: { id },
            });
            if (!existingActivity) {
                throw new Error("Activity not found");
            }
            await prisma.activity.delete({
                where: { id },
            });
            return true;
        }
        catch (error) {
            console.error("Error deleting activity:", error);
            return false;
        }
    }
};
