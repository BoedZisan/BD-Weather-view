// prisma/seed.ts
import prisma from "../lib/prisma";
import { stations } from "../data/stations";

async function main() {
  await prisma.$transaction(async (tx) => {
    console.log("🌱 Starting seed...");

    // First check if we need to clean up existing data
    const existingStations = await tx.station.count();

    if (existingStations > 0) {
      console.log("🧹 Clearing existing data...");
      
      // Delete dependent records in the correct order
      await tx.meteorologicalEntry.deleteMany();
      await tx.weatherObservation.deleteMany();
      await tx.dailySummary.deleteMany();
      await tx.synopticCode.deleteMany();
      await tx.observingTime.deleteMany();
      await tx.logs.deleteMany();
      await tx.sessions.deleteMany();
      await tx.accounts.deleteMany();
      await tx.twoFactor.deleteMany();
      await tx.users.deleteMany();
      
      // Now we can safely delete stations
      await tx.station.deleteMany();
      console.log("✅ Successfully cleared all existing data");
    }

    // Create new stations
    console.log("🌱 Seeding new stations...");
    await tx.station.createMany({
      data: stations,
    });

    console.log(`🎉 Successfully seeded ${stations.length} stations`);
  });
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });