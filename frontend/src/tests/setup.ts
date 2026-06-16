import 'fake-indexeddb/auto';
import { afterEach } from 'vitest';
import { db } from '../utils/db';

afterEach(async () => {
  await db.delete();
  await db.open();
});
