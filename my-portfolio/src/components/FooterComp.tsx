import { Link } from "react-router-dom"

export default function FooterComp() {
  return (
    <div className="p-5 text-center bg-secondary text-white select-none">
        <p className="text-xl">Vincenzo Saccone - Portfolio</p>
        <Link className="hover:underline underline-offset-2" to='/privacy-policy'>Privacy Policy</Link>
    </div>
  )
}
