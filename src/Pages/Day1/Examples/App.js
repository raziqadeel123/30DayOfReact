import React from 'react';
import Utils from './Utils';

const Profile = ({
  imgId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) => {
  return (
    <section className='profile'>
      <h3>{name}</h3>
      <img src={Utils(imgId)} alt={name} width={imageSize} height={imageSize} />
      <ul>
        <li>
          <b>profession:</b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <h1>Thomas Müller</h1>
      <Profile
        imgId='szV5sdG'
        name='Thomas Müller'
        profession='Football Player'
        discovery='Nothing'
        awards={['FiFa', 'champions league', 'Bundes Liga', 'Asia Cupa']}
      />
    </div>
  );
};

export default App;
