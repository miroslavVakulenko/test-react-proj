import { useState } from "react"

export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false)
  const handleTogger = () => {
    setIsOpen(!isOpen);
  }
  return <div>
    <button onClick={handleTogger}>{isOpen ? "Close" : "Open"}</button>
    {isOpen && (<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quia ad vel ducimus molestiae non similique, soluta eaque, expedita fuga maxime magnam excepturi officia quidem hic exercitationem cumque dolor mollitia.</p>)}
  </div>
}