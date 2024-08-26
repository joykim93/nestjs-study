import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./board.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    // @Column({ select: false })
    @Column()
    password: string;

    @Column()
    name: string;

    @OneToMany(() => Board, (board) => board.user)
    boards: Board[]
}