import * as React from 'react'
import { NextPage } from 'next'

import { formataData } from '@fgts/utils'

const Index: NextPage = () => {
  const handleClick = (): any => {
    alert('World')
  }

  return (
    <div>
      <button onClick={handleClick}>Hello leads</button>
      {console.log('formataData', formataData())}
    </div>
  )
}

export default Index
