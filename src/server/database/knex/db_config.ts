import { resolve } from 'path';
import dotenv from 'dotenv';

const dotEnvFile = resolve(__dirname, '..', '..', '..', '..', '.env');

dotenv.config({ path: dotEnvFile });

export const host_db = process.env.DATABASE_HOST;
export const port_db = Number(process.env.DATABASE_PORT);
export const user_db = process.env.DATABASE_USER;
export const pass_db = process.env.DATABASE_PASSWORD;
export const database = process.env.DATABASE_NAME;