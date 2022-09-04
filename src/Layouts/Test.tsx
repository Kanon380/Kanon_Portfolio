import { useState } from "react"
import { motion } from "framer-motion"

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      data-isOpen={ isOpen }
      initial={{ opacity: 1 }}
      className="fadein"
      onClick={() => setIsOpen(!isOpen)}
    >
    </motion.div>
  )
}