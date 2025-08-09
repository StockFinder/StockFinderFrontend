import Page404 from '../Page404'
import AvisoLegal from './AvisoLegal'
import PoliticaPrivacidad from './PoliticaPrivacidad'

import { ServiceContext } from '../../pages/_app'
import React, { useEffect, useContext } from 'react'

export default function CategorySection({ name }) {
  if (!name) return <Page404 />

  const { seTitle } = useContext(ServiceContext)
  useEffect(() => {
    seTitle(`Ayuda | GPUFinder.ovh`)
  }, [])

  switch (name) {
    case 'avisolegal':
      return <AvisoLegal />

    case 'politicaprivacidad':
      return <PoliticaPrivacidad />

    default:
      return <Page404 />
  }
}
