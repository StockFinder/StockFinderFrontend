import Link from 'next/link'
import Image from 'next/image'

function Navbar({ path, userData }) {
  const logoIMG = `/images/logos/StockFinderLogo.svg`

  return (
    <header className="sticky top-0">
      <div className="flex flex-row px-2 py-1 w-fit">
        <Link href="/">
          <span className="inline-flex">
            <Image
              height={40}
              width={40}
              src={logoIMG}
              alt="GPUFinder"
              className="my-auto text-lg font-medium hover:text-blue-500 subpixel-antialiased text-white"
            />
          </span>
        </Link>
      </div>
    </header>
  )
}


export default Navbar
