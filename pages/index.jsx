import GPUSelection from '../components/GPUSelection'

import React, { useContext, useEffect } from 'react'
import { ServiceContext } from './_app'

export default function Home() {
  const { seTitle } = useContext(ServiceContext)

  useEffect(() => {
    seTitle('GPUFinder.ovh')
  }, [])

  return (
    <>
      <GPUSelection />
    </>
  )
}