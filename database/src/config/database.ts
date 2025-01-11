import { Connection, ConnectionConfiguration } from 'tedious';
import dotenv from 'dotenv';
import { getEnvironmentVariable } from '../util/environment-variable';
import { getAzureAccessToken } from '../util/access-token';

dotenv.config(); // Load environment variables

export const connectToDB = async (callback: (connection: Connection) => void) => {
  const accessToken = await getAzureAccessToken();
  const config: ConnectionConfiguration = {
    server: getEnvironmentVariable('SQL_SERVER'),
    authentication: {
      type: 'azure-active-directory-access-token',
      options: {
        token: accessToken,
      },
    },
    options: {
      database: getEnvironmentVariable('SQL_DATABASE'),
      encrypt: true,
      trustServerCertificate: false,
    },
  };

  const connection = new Connection(config);

  connection.on('connect', (err) => {
    if (err) {
      console.error('❌ Connection Failed:', err);
    } else {
      console.log('✅ Connected to Azure SQL Database');
      callback(connection);
    }
  });

  connection.connect();
};