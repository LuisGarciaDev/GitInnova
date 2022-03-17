import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { logout } from '../action/actionlogin';
import { Button } from 'react-bootstrap';
const Logout = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

 /*    //USER
    const { name } = useSelector(state => state.login) */
    //console.log(name);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (name) => {
            if (name?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [setIsLoggedIn]);

     
    //LOGOUT
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    } 
    
  return (
    <div className='d-flex'>
                    { isLoggedIn ? (
                        <div>
                          <Button onClick={() => handleLogout()}>Logout</Button>
                        </div>
                    ) : (
                           <div>
                            Hola, Identifícate
                           </div> 
                    )}

    </div>
  )
}

export default Logout
