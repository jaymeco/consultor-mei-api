
import process from 'process';
import dotenv from 'dotenv';

dotenv.config();

const port = (process.env.API_PORT || 3001) as number;
const host = process.env.API_HOST || '0.0.0.0';

export const applicationConfig = {
  port,
  host,
};

export const corsConfig = {
  origin: '*',
  methods: '*',
};

export const jsonConfig = {
  limit: '10mb',
};
