import { CreatePageInterface } from '../../page/interfaces/create-page.interface';

export interface CreateBookInterface {
  title: string;
  lastPage?: CreatePageInterface;
  pages: CreatePageInterface[];
  author: string;
}

// const a = {
//   title: 'book title',
//   pages: [
//     {
//       pagenumber: 1, // User can update later a single page
//       content: 'Hello this is the first page ...',
//     },
//     {
//       pagenumber: 2,
//       content: 'Here goes second page content ...',
//     },
//   ],
//   author: 'Ernest Heminguie',
// };
