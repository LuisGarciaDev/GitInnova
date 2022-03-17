
import { typesCandidatos } from '../types/types'

const initialState ={
    candidatos:[]
}
export const candidatosReducers = (state= initialState, action) => {
    switch (action.type) {
        case typesCandidatos.registro:
            return{
                candidatos:[action.payload]
            }
        case typesCandidatos.list:
            return{
                    candidatos:[...action.payload]
                }
        case typesCandidatos.delete:
                return{
                            candidatos: state.candidatos.filter(can => can.correo !== action.payload)
                        }
            
    
        default:
            return state;
    }
}