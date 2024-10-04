import pool from '../database';

export interface Duty {
  id: string;
  name: string;
}

export const getDuties = async (): Promise<Duty[]> => {
  const result = await pool.query('SELECT * FROM duties');
  return result.rows;
};

export const getDutyById = async (id: string): Promise<Duty | null> => {
  const result = await pool.query('SELECT * FROM duties WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const createDuty = async (name: string): Promise<Duty> => {
  const result = await pool.query(
    'INSERT INTO duties (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
};

export const updateDuty = async (id: string, name: string): Promise<Duty | null> => {
  const result = await pool.query(
    'UPDATE duties SET name = $1 WHERE id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0] || null;
};

export const deleteDuty = async (id: string): Promise<void> => {
  await pool.query('DELETE FROM duties WHERE id = $1', [id]);
};

