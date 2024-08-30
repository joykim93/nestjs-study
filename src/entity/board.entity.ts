import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Board {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column()
    userId: number;

    @Column()
    contents: string;

    @UpdateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updateAt: Date;

    @ManyToOne(() => User)
    @JoinColumn({name: 'userId'})
    user: User;
}