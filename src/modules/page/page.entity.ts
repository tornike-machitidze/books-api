// import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { BookEntity } from '../book/book.entity';

// @Entity('page')
// export class PageEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id!: string;

//   @ManyToOne(() => BookEntity, (book) => book.pages, { onDelete: 'CASCADE' })
//   book!: BookEntity;

//   @Column()
//   pageNumber!: number;

//   @Column()
//   contnet!: string;
// }
