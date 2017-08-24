import Realm from 'realm';


export const createFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', { faveId: '1', faved_on: Date.now() });
  });
}

export const deleteFave = (faveId) => {
  realm.write(() => {
    let fave = realm.objects('Fave')
      .filtered('id ===$0', faveId);
    realm.delete(fave);
  });
}


export const queryFaves = () => {
  let fave = realm.objects('Fave')
  return fave
}

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

const realm = new Realm({ schema: [Fave] });

export default realm;