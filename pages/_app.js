import Layout from '../components/Layouts/Layout'
import { AnimatePresence } from 'framer-motion'
import React, { createContext, useEffect, useState } from 'react'
import Loading from '../components/Loading'

import '../styles/global.css'

export const ServiceContext = createContext()
export const BuilderContext = createContext()
export const DropdownContext = createContext()

function Website({ Component, pageProps: { ...pageProps }, router }) {

  const [userDataLoaded, setUserDataLoaded] = useState(false)
  const [userData, setUserData] = useState(undefined)
  const [title, seTitle] = useState('StockFinder.tech')

  useEffect(() => {}, [userData, title])

  useEffect(() => {
    async function fetchUserData() {
      setUserDataLoaded(true)
    }
    fetchUserData()
  }, [])

  return (
    <ServiceContext.Provider
      value={{
        userData,
        setUserData,
        title,
        seTitle
      }}
    >
      <Layout userData={userData} title={title} router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          {userDataLoaded ? (
            <Component {...pageProps} key={router.route} />
          ) : (
            <Loading />
          )}
        </AnimatePresence>
      </Layout>
    </ServiceContext.Provider>
  )
}

export default Website
