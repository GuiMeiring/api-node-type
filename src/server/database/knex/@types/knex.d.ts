import { IUser,ICity, IPerson} from '../../models';


declare module 'knex/types/tables' {
  interface Tables {
    pessoa: IPerson;
    cidade: ICity;
    usuario: IUser;
  }
}
