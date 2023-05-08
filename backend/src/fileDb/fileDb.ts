import * as fsp from 'fs/promises';
import * as fs from 'fs';
import * as path from 'path'
import IRegisterSchema from '../types/posts.interface';
import Table from './Tables';
import IErrors from '../types/posts.interface';

class RegisterSchema implements IRegisterSchema {
  private tables: Record<string, any>;
  private schemaFilePath = '';
  tablesname: string;
  folder: string;
  exists: boolean;
  file: string;
  fileProblems: IErrors;
  constructor() {
    this.tables = {};
    this.tablesname = '';
    this.folder = path.join(__dirname, this.tablesname);
    this.exists = fs.existsSync(this.folder);
    this.file = path.join(this.folder, `${this.tablesname}.json`);
    this.fileProblems = {
      statusCode: 500,
      message: 'cannot create file or directory',
    };
    if (!this.exists) {
      fsp.mkdir(this.folder);
      // create file
      fsp.writeFile(
        this.file,
        JSON.stringify([]),
        (err: string, data: string) => {
          if (err) {
            return this.fileProblems;
          }
          return data;
        },
      );
    }
  }

  registerSchema(tablesname: string, schema: any): void {
    this.tables = { ...this.tables, [tablesname]: schema };
  }
  getTable(tablesname: string) {
    const table = this.tables[tablesname];
    if (!table) {
      throw new Error(`Schema ${tablesname} is not registered`);
    }
    return new Table(this.schemaFilePath);
  }
}

export default new RegisterSchema();
