import React, { useEffect, useContext } from 'react'
import { ServiceContext } from '../_app'
import ProductsPage from '../../components/ProductsPage'



export default function AMD({ ...pageProps }) {
  const { seTitle } = useContext(ServiceContext)

  useEffect(() => {
    seTitle('GPUFinder.ovh')
  }, [])

  return (
    <>
      <ProductsPage data={pageProps.data} brand='nvidia'/>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.BACKEND_API_URL + '/nvidia')
  const data = await res.json()
  return { props: { data } }
}

// export async function getStaticProps() {

//   const res = await fetch('http://localhost:3300/data/nvidia.json');
//   const data = await res.json();
  
//   return {
//     props: { data },
//     // revalidate: 60, // segundos
//   };

// }