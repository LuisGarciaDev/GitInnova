import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { typesCandidatos } from '../types/types'


// delete

export const deleteCandidato = (correo) => {
    return async (dispatch) => {
        const collectionCandidato = collection(db, "candidatos")
        const q = query(collectionCandidato, where("email", "==", correo))

        const datos = await getDocs(q)
        datos.forEach((docu) => {
            deleteDoc(doc(db, "candidatos", docu.id))
        })
        dispatch(deleteSincrono(correo))

    }

}


export const deleteSincrono = (correo) => {
    return {
        type: typesCandidatos.delete,
        payload: correo
    }

}


// list
export const listCandidatos = () => {
    return async (dispatch) => {
        const datos = await getDocs(collection(db, "candidatos"));
        const candidato = [];
        datos.forEach((doc) => {
            candidato.push({
                ...doc.data()
            })
        })
        dispatch(list(candidato))
    }
}

export const list = (candidato) => {
    return {
        type: typesCandidatos.list,
        payload: candidato
    }

}





export const registerCandidatos = (name, lastname, cedula, date, email, usuariogit) => {
    return (dispatch) => {
        const newCandidato = {
            name, lastname, cedula, date, email, usuariogit
        }
        addDoc(collection(db, "candidatos"), newCandidato)
            .then(resp => {
                dispatch(actionCandidatosSincrono(newCandidato))
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export const actionCandidatosSincrono = (candidato) => {
    return {
        type: typesCandidatos.registro,
        payload: candidato
    }
}




