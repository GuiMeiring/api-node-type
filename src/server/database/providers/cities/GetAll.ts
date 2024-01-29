import { ETableNames } from '../../ETableNames';
import { ICity } from '../../models';
import { Knex } from '../../knex';


export const getAll = async (page: number, limit: number, filter: string, city_id = 0): Promise<ICity[] | Error> => {
  try {
    const result = await Knex(ETableNames.city)
      .select('*')
      .where('city_id', Number(city_id))
      .orWhere('name', 'like', `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    if (city_id > 0 && result.every(item => item.city_id !== city_id)) {
      const resultById = await Knex(ETableNames.city)
        .select('*')
        .where('city_id', '=', city_id)
        .first();

      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar os registros');
  }
};
