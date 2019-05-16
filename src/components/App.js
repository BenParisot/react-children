import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Styles from './main.css';

export default function App() {

  const [selected, updateSelected] = useState('home');

  const response = {
    home: 'Welcome home buddy',
    projects: 'Check out these sweet projects',
    blog: 'Oooooh read em',
    contact: 'lets chat'
  };

  return (
    <section className={Styles.container}>
      <Sidebar>
        <li onClick={() => updateSelected('home')} >Home</li>
        <li onClick={() => updateSelected('projects')} >Projects</li>
        <li onClick={() => updateSelected('blog')} >Blog</li>
        <li onClick={() => updateSelected('contact')} >Contact</li>
      </Sidebar>
      <p>{response[selected]}</p>
    </section>

  ); 
  
}
