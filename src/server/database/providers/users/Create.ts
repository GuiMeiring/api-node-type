import { PasswordCrypto } from '../../../shared/services';
import { ETableNames } from '../../ETableNames';
import { IUser } from '../../models';
import { Knex } from '../../knex';


export const create = async (user: Omit<IUser, 'user_id'>): Promise<number | Error> => {
  try {
    const hashedPassword = PasswordCrypto.hashPassword(user.password);

    const [result] = await Knex(ETableNames.user).insert({ ...user, password: hashedPassword }).returning('user_id');

    if (typeof result === 'object') {
      return result.usser_id;
    } else if (typeof result === 'number') {
      return result;
    }

    return new Error('Erro ao cadastrar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};
