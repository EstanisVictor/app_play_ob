import { AppDataSource } from "../data-source";
import { Role } from "../entities/role";

AppDataSource.initialize().then(async () => {
  const roleRepository = AppDataSource.getRepository(Role);
  const roles = ["admin", "teacher", "student"];

  for (const name of roles) {
    const exists = await roleRepository.findOneBy({ name });
    if (!exists) {
      await roleRepository.save({ name });
      console.log(`Role "${name}" criada.`);
    }
  }

  process.exit(0);
});
