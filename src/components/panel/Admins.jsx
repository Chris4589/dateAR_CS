import React from 'react'
import { useModal } from '../../Hooks/useModal';
import { AdminTable } from './tables/AdminTable';
import { DsTable } from './Utils/DsTable';
import { FormAdmin } from './Utils/FormAdmin';
import { Modal } from './Utils/Modal';

export const Admins = () => {
  const [ addModal, modalClass ] = useModal();

  const titles = [
    'ID',
    'Name',
    'TYPE',
    'EXPIRATION',
  ];

  const admins = [
    {
      id: 1,
      name: 'Hypnotize',
      type: 1,
      date: new Date().toUTCString(),
    },
    {
      id: 2,
      name: 'Randro',
      type: 0,
      date: new Date().toUTCString(),
    },
  ];

  return (
    <div>
      <div className="Ds__container">
      <DsTable component={AdminTable} titles={titles} items={admins} addModal={addModal}/>

      <Modal component={FormAdmin} addModal={addModal} modalClass={modalClass} />
    </div>
    </div>
  )
}
