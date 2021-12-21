import React from 'react';
/* import { useModal } from '../../../Hooks/useModal'; */

export const Modal = ({component:Component, addModal, modalClass}) => {

  /* const [ addModal, modalClass ] = useModal('Modal__remove'); */
  
  return (
    <div className={modalClass}>
      <Component addModal={addModal}/>

      <button className='Modal__btnClose' onClick={addModal}> <i className="fa fa-close"></i> </button>
    </div>
  )
}
