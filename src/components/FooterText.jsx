import { Link } from "react-router-dom"

const FooterText = () => {
  return (
    <div className="flex items-center justify-between pt-10 pb-4 reveal-up">
          <Link href="/" className="logo reveal-up">
            <img src="/logo.svg" alt="logo" width={40} height={40} />
          </Link>
          <p className="text-sm reveal-up text-zinc-400">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="text-zinc-200">TheMercury1229</span>
          </p>
        </div>
  )
}

export default FooterText