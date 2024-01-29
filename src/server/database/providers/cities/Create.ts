import { ETableNames } from '../../ETableNames';
import { ICity } from '../../models';
import { Knex } from '../../knex';


export const create = async (cidade: Omit<ICity, 'city_id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.city).insert(cidade).returning('city_id');

    if (typeof result === 'object') {
      return result.city_id;
    } else if (typeof result === 'number') {
      return result;
    }

    return new Error('Erro ao cadastrar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};
