import { HttpException } from '@nestjs/common';
import { ServiceAccount, cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as data from '../../../keys/documentflow-388923-b01133bd8988.json';

export class DocumentRepository {
  onModuleInit() {
    initializeApp({
      credential: cert(data as ServiceAccount),
    });

    return getFirestore();
  }

  async createDocument(userId: string, document: any) {
    const db = getFirestore();

    try {
      const docRef = db.collection('documents').doc('userId');

      await docRef.set({ document }, { merge: true });
    } catch (error) {
      throw new HttpException(error.note, 406);
    }
  }

  async getDocument(userId: string) {
    const db = getFirestore();

    const snapshot = await db.collection(userId).get();
    return snapshot.forEach((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }
}
