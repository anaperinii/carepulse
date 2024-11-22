
import * as sdk from 'node-appwrite'

export const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  } = process.env;

  const client = new sdk.Client();

  client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6734a7c90027694d4f42").setKey("standard_1d3ee2b7aec1654757d88b9f614d9380b138a81b46ec198294e72e03a4f7399a784da7f5b894d2fcd65cf2966ced79542448786ada54d549cb3cbe9a2515f9267438fd9c624958696cd9d629c8cbd54e5de997867db3a1c09b8543026ff3881bc2d6f96f3c2eac5523ed279721a4dd1c0b3dde4540b4adf03d0e13b1dec3305c");

  //log para verificação de conexão com o appwrite
  console.log("Configuração do Appwrite:", {
    endpoint: ENDPOINT,
    projectId: PROJECT_ID,
  });

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);