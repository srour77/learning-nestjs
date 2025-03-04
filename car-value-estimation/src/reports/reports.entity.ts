import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class Reports {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    price: number
}
