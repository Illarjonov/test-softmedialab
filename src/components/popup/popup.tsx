import React, { useState, FunctionComponent, ReactNode } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import './popup.modules.scss'

interface PopupProps {
  children: ReactNode
}

const Popup: FunctionComponent<PopupProps> = ({ children }: PopupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeref = useOutsideClick(() => setIsOpen(false))

  return (
    <div className="popup">
      <button
        className="popup__button"
        type="button"
        onMouseEnter={() => setIsOpen(true)}
      >
        <div className="popup__button-text">{isOpen ? '✖' : 'i'}</div>
      </button>
      {isOpen && (
        <div className="popup__content" ref={closeref}>
          <span className="popup__content-text">{children}</span>
        </div>
      )}
    </div>
  )
}

export default Popup
