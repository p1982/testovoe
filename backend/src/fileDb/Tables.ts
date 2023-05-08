import * as fsp from 'fs/promises';
import * as fs from 'fs';
import { nanoid } from 'nanoid';
import ITable from '../types/posts.interface';
import IErrors from '../types/posts.interface';

class Table implements ITable {
  tablesname: string;
  fileProblems: IErrors;
  field: IErrors;
  notFound: IErrors;
  constructor(tablesname: string) {
    this.tablesname = tablesname;
    this.fileProblems = {
      statusCode: 500,
      message: 'cannot create file or directory',
    };
    this.field = {
      statusCode: 404,
      message: 'no field text or title',
    };
    this.notFound = {
      statusCode: 404,
      message: 'could not be found',
    };
  }

  // read
  async readData() {
    const product = await fsp.readFile(
      this.tablesname,
      'utf8',
      (err: string, data: string) => {
        if (!err) {
          return data;
        } else {
          return err;
        }
      },
    );
    return JSON.parse(product);
  }
  // write
  async writeData(data: Array<any>) {
    fs.writeFile(this.tablesname, JSON.stringify(data), (err: string) => {
      if (err) {
        return this.fileProblems;
      }
      return data;
    });
  }
}

export default Table;