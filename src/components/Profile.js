import React, { useState } from 'react'
import TableData from './TableData';

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleOnChange = e => {
    setUsername(e.target.value);
  }

  const hanldeSubmit = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };



  return (
    <div className='container'>
      <div className='text-center m-4'><h4> Consulta Los Repositorios Publicos Del Candidato</h4></div>
      
      <div className='text-center m-2'>
        <input type="text" value={username} onChange={handleOnChange} />
        <button type="submit" onClick={hanldeSubmit}>Search</button>
        <TableData data={data} repositories={repositories} />

      </div>
      <div>
        <div className='m-5 text-center'>
                <img src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647500689/sprint3/GitHub-Logo_egw9im.png' width='100px'></img>
            </div>
            <div className="mb-2 text-center">
                <p>Code By Luis Garcia</p>
            </div>
        </div>
    </div>   
    );
};
export default Profile