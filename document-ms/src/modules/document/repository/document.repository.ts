import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../../../../../keys/documentflow-388923-b01133bd8988.js';

export class DocumentRepository {
  async connectDb() {
    initializeApp({
      credential: cert(serviceAccount),
    });

    return getFirestore();
  }

  async createDocument(userId: string, document: any) {
    const db = await this.connectDb();

    const docRef = db.collection(userId).doc('document');

    await docRef.set(document);
  }

  async getDocument(userId: string) {
    const db = await this.connectDb();

    const snapshot = await db.collection(userId).get();
    return snapshot.forEach((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }
}
