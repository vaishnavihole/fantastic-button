import React from 'react'
import FantasticButton from './components/FantasticButton/FantasticButton'

function App() {
  return (
    <>
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

    </>
  )
}

export default App