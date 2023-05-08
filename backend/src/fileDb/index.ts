// imports
import RegisterSchema from './fileDb';
import ISchema from '../types/posts.interface'
// database
const table = 'newposts';

// schema
const newspostSchema: ISchema = {
  id: '1',
  title: 'something',
  text: 'something',
  createDate: new Date(),
  updateDate: new Date(),
};

RegisterSchema.registerSchema(table, newspostSchema);
const newspostTable = RegisterSchema.getTable(table);
// const start = async () => {
//   // get by id
//   const findById = 'D0onImDgUutTLGOpGTEDy';
//   const finded = await newspostTable.getById(findById);
//   console.log(finded);

//   // get all
//   const all = await newspostTable.getAll();
//   console.log(all, 'get all');
//   // data for create
//   const data = {
//     title: 'Something',
//     text: 'Something',
//   };

//   // create data
//   const created = await newspostTable.create(data);
//   console.log(created, 'created');

//   // data for update
//   const updateData = {
//     title: 'Anything',
//     text: 'Anything',
//   };

//   // update data
//   const idUpdate = 'D0onImDgUutTLGOpGTEDy';
//   const updated = await newspostTable.update(updateData, idUpdate);
//   console.log(updated, 'updated');

//   // delete
//   const deletedId = 'kjQgKqjqpWx8DGs1KdMSZ';
//   const deleted = await newspostTable.delete(deletedId);
//   console.log(deleted, 'deleted');
// };
// start();
