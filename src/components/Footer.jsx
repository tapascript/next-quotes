import Link from "next/link"

const Footer = () => {
  return (
    <div className="text-center border-t-2 absolute bottom-0 w-full">
      <p className="my-2">Made with ❤️ by <Link href="https://youtube.com/@tapasadhikary" target="_blank">tapaScript</Link></p>
    </div>
  )
}

export default Footer