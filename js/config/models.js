import Realm from 'realm';


export const createFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', { id: faveId, faved_on: new Date() }, true);
  });
}

export const deleteFave = (faveId) => {
  realm.write(() => {
    let fave = realm.objects('Fave')
      .filtered(`id = '${faveId}'`);
    realm.delete(fave);
  });
}

export const queryFaves = () => {
  let query = realm.objects('Fave')
  return query
}

const Faves = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

const realm = new Realm({ schema: [Faves] });
console.log(realm.path)

export default realm;