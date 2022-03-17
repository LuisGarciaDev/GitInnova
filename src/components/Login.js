import React from 'react';
import { useForm } from '../Hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginEmailPassword, loginGoogle, loginFacebook } from '../action/actionlogin';
import { Link } from 'react-router-dom';


const Login = () => {


    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, password));
        
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
     
    }
    const handleFacebook = () => {
        dispatch(loginFacebook());
       
    }

    return (
        <div className='container justify-content-center'>
            <div className='text-center m-2'>
                <img src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647500689/sprint3/GitHub-Logo_egw9im.png' width='150px'></img>
            </div>
        <div className='justify-content-center d-flex'>
        <form className='w-50 m-5' onSubmit={handleLogin}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email}
                    onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password"
                        value={password}
                        onChange={handleInputChange} />
                </div>
                <Link to="/register" className="links">
                Register
            </Link>
                <div className='text-center m-1'>
                <button type="submit" className="btn btn-danger" onClick={() => handleGoogle()}>Google</button>
            </div>
            <div className='text-center m-2'>
                <button type="submit" className="btn btn-primary" onClick={() => handleFacebook()}>Facebook</button>
            </div>
            <div className='text-center m-3'>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            
        </form>
        </div>
        </div>
    )
}

export default Login