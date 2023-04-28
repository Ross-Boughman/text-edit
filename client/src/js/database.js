import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// adds data with id 1 to DB
export const putDb = async (content) => {
  console.log('Posted to DB.');
  const jateDB = await openDB("jate", 1);
  const transaction = jateDB.transaction("jate", "readwrite");
  const store = transaction.objectStore("jate");
  const request = store.put({id: 1, value: content});
  const result = await request;
  console.log(`${result.value} Saved to DB`);
};
// retrieves data from DB, if there is a result return value
export const getDb = async () => {
  console.log('Get from DB.');
  const jateDB = await openDB("jate", 1);
  const transaction = jateDB.transaction("jate", "readonly");
  const store = transaction.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  console.log(result.value, result);
  return result?.value;
}
initdb();
