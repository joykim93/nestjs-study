import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board {
    @PrimaryColumn({name: 'id'})
    id: number;

    @Column()
    name: string;

    @Column()
    contents: string;

    @UpdateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updateAt: Date;
}