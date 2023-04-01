import React, { useEffect, useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import './modal.scss'
const Modal = (props) => {
  const [active,setActive] = useState(false)
  const modalRef = useRef(null);

  const closeModal = () => {
    modalRef.current.classList.remove('active')
    if(props.onClose) props.onClose()
  }

  useEffect(() => {
    setActive(props.active)
  }, [props.active])

  return (
    <div ref = {modalRef} className={`modal ${active ? 'active' : ''}`} onClick = {closeModal}>
        {props.children}
    </div>
  )
}

export const ModalContent = (props) => {


    return (
        <div  className='modal__content'>
            {props.children}
            <div className='ml-4 text-3xl cursor-pointer text-black'>
                <AiFillCloseCircle/>
            </div>
        </div>
    )
}

export default Modal