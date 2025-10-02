export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: "com.hp.fooddelivery",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databse: process.env.APPWRITE_DB,
  userCollectionId: "user",
}