import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./board.entity";
import { Exclude } from "class-transformer";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    // @Column({ select: false })
    @Column()
    @Exclude()
    password: string;

    @Column()
    name: string;

    @OneToMany(() => Board, (board) => board.user)
    boards: Board[]
}