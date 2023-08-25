import React from 'react'
import "./App.css"
import FantasticButton from './components/FantasticButton/FantasticButton'

function App() {
  return (
    <>

      <div>
        <h1 className='text-center'>Fantastic Button</h1>
        <p className='text-center fs-3'>This is a demo project of reusable button component 'FantasticButton' in ReactJS ⚛️</p>
      </div>

     
      <FantasticButton
        text={'I am Chilly Button'}
        width={'200px'}
        marginLeft={'40px'}
        marginRight={'70px'}
        theme={'chilly'} />

      <FantasticButton
        text={'I am Dark Button'}
        width={'200px'}
        marginLeft={'40px'}
        marginRight={'70px'}
        theme={'dark'} />

      <FantasticButton
        text={'I am Tomato Button'}
        width={'200px'}
        marginLeft={'40px'}
        marginRight={'70px'}
        theme={'tomato'} />


      <FantasticButton
        text={'I am Light Button'}
        width={'200px'}
        marginLeft={'40px'}
        marginRight={'70px'}
        theme={'light'} />

      <FantasticButton
        text={'I am Organge Button'}
        width={'200px'}
        marginLeft={'40px'}
        marginRight={'70px'}
        theme={'orange'} />


      <p className='info-text'>
        Feel free to explore 'FantasticButton' code and experiemnt with it. Link: <a href="https://github.com/vaishnavihole/fantastic-button">https://github.com/vaishnavihole/fantastic-button</a>
      </p>

     <div className='footer text-center'>
        Developed with <span className='text-red fs-2'>♥️</span> by <a href="https://github.com/vaishnavihole" className='text-white'>Vaishnavi Hole</a>
     </div>

    </>
  )
}

export default App