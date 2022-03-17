import React from 'react';
import { Table } from 'react-bootstrap';
import { deleteCandidato } from '../action/actionCandidatos';
import { useDispatch, useSelector } from 'react-redux';


export const ListarCandidato = () => {
   const dispatch = useDispatch()

    const { candidatos } = useSelector(store => store.candidatos);
    return (
        <div className='m-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Cedula</th>
                        <th>Fecha de nacimiento</th>
                        <th>Email</th>
                        <th>Usuario-Git</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {candidatos.map((e, index) => (

                        <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.lastname}</td>
                            <td>{e.cedula}</td>
                            <td>{e.date}</td>
                            <td>{e.email}</td>
                            <td>{e.usuariogit}</td>
                            <td><button onClick={() => dispatch(deleteCandidato(e.email))}> Eliminar</button></td>
                        </tr>

                ))


                    }


            </tbody>
        </Table>
        
        </div >
    )
}