import Link from 'next/link'

// import Banner from './Banner'

export default function index() {
  const linkClass = 'hover:underline text-left text-blue-500 text-xs sm:text-sm hover:cursor-pointer'
  return (
    <>
      <footer className="sticky w-fit mx-auto bottom-0 justify-center">
          <div className="flex flex-row gap-4 px-2 py-1 bg-zinc-800 rounded-t-lg">
            <Link href="/info/politicaprivacidad" className={linkClass}>
              Política de Privacidad
            </Link>
            <Link href="/info/avisolegal" className={linkClass}>
              Aviso Legal
            </Link>
          </div>
      </footer>
    </>
  )
}
