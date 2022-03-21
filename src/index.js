import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'








ReactDOM.render(
  <React.StrictMode>
     <Header/>
     <Profile
        pic = 'https://sm.ign.com/ign_br/cover/j/john-wick-/john-wick-chapter-4_129x.jpg'
        name = 'João Victor'
        work = 'Médico'
     />
     <Profile
        pic =  'https://i0.wp.com/www.blogdehollywood.com.br/wp-content/uploads/2022/03/scarlett-johansson-blog-de-hollywood-600x600.png'
        name = 'Kátia Samara'
        work = "Farmaceutica"
     />
     <Profile
        pic = 'https://w7.pngwing.com/pngs/414/724/png-transparent-one-punch-man-anime-saitama-manga-one-punch-man-food-hand-boy-thumbnail.png'
        name = 'Vicente Rodrigues'
        work = 'Engenheiro Civil'
     />
     <Profile
        pic = 'https://immub-space.nyc3.digitaloceanspaces.com/artista/media_artista_16706.jpg'
        name = 'Luiz Filho'
        work = 'Arquiteto'  
       />
       <p className="span" >We found 23 contacts</p>
  </React.StrictMode>,
  document.getElementById('root')
);


