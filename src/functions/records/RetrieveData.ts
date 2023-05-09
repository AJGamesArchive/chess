import { db } from "../../database/initalise";
import { getDoc, doc, DocumentData } from "firebase/firestore";

export async function retrieveRecords(username: string): Promise<any[] | string> {
  const gameHistory: any[] = [];
  const docUserRef = doc(db, 'users', username.toUpperCase())
  let docUser: DocumentData; 
  try{
    docUser = await getDoc(docUserRef)
  } catch(e){
    console.log(e)
    let erorr: string = 'you dont have internet'
    return Promise.resolve(erorr)
  }
  const numRecords = docUser.data().total;
  for(let i = 1; i <= numRecords; i++ ){
    const docUserRef = doc(db, 'users', username.toUpperCase(), 'games', `GAME ${i}` )
    let docUser: DocumentData; 
    try{
      docUser = await getDoc(docUserRef)
    } catch(e){
      console.log(e)
      let erorr: string = 'you dont have internet'
      return Promise.resolve(erorr)
    }
    gameHistory.push(docUser.data())
  }
  return Promise.resolve(gameHistory);
}
