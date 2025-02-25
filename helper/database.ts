import prisma from "../Database/db.config";
import { z } from "zod";

const RefTableSchema = z.object({
  referrerName: z.string().min(1, "Referrer name is required"),
  referrerEmail: z.string().email("Invalid email format"),
  referrerPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  refereeName: z.string().min(1, "Referee name is required"),
  refereeEmail: z.string().email("Invalid email format"),
  refereePhone: z.string().min(10, "Phone number must be at least 10 digits"),
});

interface RefTable extends z.infer<typeof RefTableSchema> {}

export async function selectAll() {
  const data = await prisma.refTable.findMany();
  return data;
}

export async function storeData(data: RefTable) {
  const validation = RefTableSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(
      `Validation failed: ${JSON.stringify(validation.error.format())}`
    );
  }

  const storedData = await prisma.refTable.create({
    data: validation.data,
  });

  return storedData;
}
