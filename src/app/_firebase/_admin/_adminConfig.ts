/** @format */

import {
  initializeApp,
  cert,
  getApps,
  getApp,
  AppOptions
} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Asegúrate de que las variables de entorno estén disponibles
const firebaseAdminConfig: AppOptions = {
  credential: cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  serviceAccountId: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
};


export const app =
getApps().length > 0 ? getApp() : initializeApp(firebaseAdminConfig);
export const db = getFirestore();
export const auth = getAuth(app);
