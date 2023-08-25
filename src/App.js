import React from 'react'
import FantasticButton from './components/FantasticButton/FantasticButton'

function App() {
  return (
    <div>
      <FantasticButton 
        text={'Login Here'} 
        width={'200px'} 
        marginLeft={'40px'} 
        marginRight={'70px'}
        theme={'chilly'}/>

      <FantasticButton  text={'Register Here'} theme={'orange'} padding={'10px'} />
    </div>
  )
}

export default App