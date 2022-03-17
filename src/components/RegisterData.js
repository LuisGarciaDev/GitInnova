import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listCandidatos, registerCandidatos } from '../action/actionCandidatos';
import { useForm } from '../Hooks/useForm';
import { ListarCandidato } from './ListarCandidato';
import Logout from './Logout';


const RegisterData = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: '',
        lastname: '',
        cedula: '',
        date: '',
        email: '',
        usuariogit: ''
    });

    const { name, lastname, cedula, date, email, usuariogit } = formValues;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(registerCandidatos(name, lastname, cedula, date, email, usuariogit))
    }

    useEffect(() => {
        dispatch(listCandidatos())
    }, [dispatch])


    return (
        <div className='container m-2 justify-content-center'>
            <div className='d-flex'>
            <div className='m-5 text-center'>
                <img src='https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png' width='100px'></img>
            </div>
            <div className="mb-4 text-center">
                <h3>Candidatos</h3>
                <ListarCandidato />
            </div>
            <div className="m-5 text-center">
                <Logout/>
            </div>

            </div>
            <div className='d-flex items-center'>
            
                
            <form className='w-50 m-4 justify-content-center' onSubmit={handleRegistro}>
                <div className='w-50 justify-content-center'><h4>Registrar Candidatos</h4></div>
               
                <div className="my-3">
                    <input type="text" className="form-control" aria-describedby="textHelp" name="name" placeholder="Name" value={name}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <input className="form-control" id="exampleInputlastname" type="text" name="lastname" value={lastname} placeholder="Apellidos"
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <input className="form-control" id="exampleInputcedula" name="cedula" type="text" placeholder="Cedula" value={cedula}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <input className="form-control" id="exampleInputdate" name="date" type="date" placeholder="Enter Fecha de nacimiento" value={date}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    
                    <input className="form-control" id="exampleInputemail" name="email" type="email" placeholder="Enter Email" value={email}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    
                    <input className="form-control" id="exampleInputusuariogit" name="usuariogit" type="text" placeholder="Enter Usuario de Github" value={usuariogit}
                        onChange={handleInputChange} />
                </div>

                <div className='text-center m-2'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>

        </div>
    )
}
export default RegisterData