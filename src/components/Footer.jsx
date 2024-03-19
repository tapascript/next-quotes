import Link from "next/link"

const Footer = () => {
  return (
    <div className="text-center border-t-2 fixed bottom-0 w-full bg-gray-50">
      <p className="my-2">Made with ❤️ by <Link className="underline" href="https://youtube.com/@tapasadhikary" target="_blank">tapaScript</Link></p>
    </div>
  )
}

export default Footer