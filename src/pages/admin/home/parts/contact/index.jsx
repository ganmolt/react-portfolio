import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

import './index.css'

export const Contact = () => {
  return (
    <>
      <h2 className="title">Contact</h2>
      <span className="contact-icon">
        <a href="https://github.com/ganmolt"><FaGithub size={'50px'} /></a>
      </span>
      <span className="contact-icon">
        <a href="https://twitter.com/ganmolt"><FaTwitter size={'50px'} /></a>
      </span>
    </>
  )
}
