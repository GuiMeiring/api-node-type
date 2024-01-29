import { ETableNames } from '../../ETableNames';
import { ICity } from '../../models';
import { Knex } from '../../knex';


export const getById = async (city_id: number): Promise<ICity | Error> => {
  try {
    const result = await Knex(ETableNames.city)
      .select('*')
      .where('city_id', '=', city_id)
      .first();

    if (result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar o registro');
  }
};
