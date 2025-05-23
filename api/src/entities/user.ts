import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./role";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;
  @Column({ type: "text", unique: true })
  email: string;
  @Column({ type: "text" })
  password: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({ name: "user_roles" })
  roles: Role[];
}
