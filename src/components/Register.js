import { useForm } from '../Hooks/useForm';
import { registroEmailPasswordNombre } from '../action/actionregister';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '@gmail.com',
        pass1: '',
        pass2: ''
    });

    const { name, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(email, pass1, name)
        dispatch(registroEmailPasswordNombre(email, pass1, name))
    }

    return (
        <><div className='container justify-content-center'>
        <div className='text-center m-2'>
                <img src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647500689/sprint3/GitHub-Logo_egw9im.png' width='150px'></img>
            </div>
    <div className='justify-content-center d-flex'>
            <form className='w-50 m-2' onSubmit={handleRegistro}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" aria-describedby="textHelp" name="name" value={name}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="pass1" value={pass1}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Re-Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" name="pass2" value={pass2}
                        onChange={handleInputChange} />
                </div>
                <Link to="/login" className="links">
                Iniciar sesión
            </Link>

                <div className='text-center m-5'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
            </form>
            </div>
        </div>
        </>
    )
}

export default Register