import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "username", length: 10 })
  username: string;

  @Column("character varying", { name: "passhash", length: 255 })
  passhash: string;
}
