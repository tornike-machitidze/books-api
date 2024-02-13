import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { PageEntity } from '../page/page.entity';

@Entity('book')
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @OneToMany(() => PageEntity, (page) => page.book)
  pages!: PageEntity[];

  @Column()
  lastPage!: string;

  @Column()
  author!: string;
}
