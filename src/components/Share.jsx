import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

import Link from "next/link";

const Share = () => {
  return (
    <div className="flex">
      <Link href="#" className="mx-2">
        <FaXTwitter size={32} />
      </Link>

      <Link href="#" className="mx-2">
        <FaLinkedin size={32} />
      </Link>

      <Link href="#" className="mx-2">
        <FaFacebookSquare size={32} />
      </Link>

      <Link href="#" className="mx-2">
        <FaSquareThreads size={32} />
      </Link>
    </div>
  )
}

export default Share