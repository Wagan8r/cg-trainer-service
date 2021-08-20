import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trainers')
export class TrainerEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ name: 'email' })
    public email: string;

    @Column({ name: 'phone' })
    public phone: string;

    @Column({ name: 'first_name' })
    public first_name: string;

    @Column({ name: 'last_name' })
    public last_name: string;

    @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
    public createdAt: Date;
}
