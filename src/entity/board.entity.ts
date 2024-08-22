import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column()
    userId: number;

    @Column()
    name: string;

    @Column()
    contents: string;

    @UpdateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updateAt: Date;
}