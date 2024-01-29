import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';


export const deleteById = async (city_id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.city)
      .where('city_id', '=', city_id)
      .del();

    if (result > 0) return;

    return new Error('Erro ao apagar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao apagar o registro');
  }
};
