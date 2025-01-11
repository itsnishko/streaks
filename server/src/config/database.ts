import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const sqlConfig: sql.config = {
  user: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE'],
  server: process.env['DB_SERVER'] || '',
  port: parseInt(process.env['DB_PORT'] || '1433', 10),
  options: {
    encrypt: process.env['DB_ENCRYPT'] === 'true',
    trustServerCertificate: false,
  },
};

const poolPromise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then((pool) => {
    console.log('✅ Connected to Azure SQL Database');
    return pool;
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
    throw err;
  });

export default poolPromise;
