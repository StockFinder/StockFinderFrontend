import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        id="main-content"
        className="h-full w-full overflow-hidden text-gray-300 m-0"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
