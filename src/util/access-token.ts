import { DefaultAzureCredential } from "@azure/identity";

// Function to get access token and connect to Azure SQL Database
export const getAzureAccessToken = async (): Promise<string> => {
  const userAssignedClientId = process.env.MANAGED_IDENTITY_CLIENT_ID || undefined;
  const credential = new DefaultAzureCredential({
    managedIdentityClientId: userAssignedClientId,
  });
  const tokenResponse = await credential.getToken('https://database.windows.net/.default');
  if (tokenResponse && tokenResponse.token) {
    console.log('✅ Successfully fetched Azure SQL Access Token');
    return tokenResponse.token;
  }

  throw new Error('❌ Failed to fetch access token.');
};