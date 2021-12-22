import React from 'react'
import { useModal } from '../../Hooks/useModal';
import { AdminRolesTable } from './tables/AdminRolesTable';
import { DsTable } from './Utils/DsTable';
import { FormAdminRoles } from './Utils/FormAdminRoles';
import { Modal } from './Utils/Modal';

export const AdminRoles = () => {

  const [ addModal, modalClass ] = useModal();

  const titles = [
    'ID',
    'Name',
    'Flags',
  ];

  const admins = [
    {
      id: 1,
      name: 'Hypnotize',
      flags: 'abcdgf',
    },
    {
      id: 2,
      name: 'Randro',
      flags: 'abcd',
    },
  ];

  return (
    <div>
      <div className="Ds__container">
      <DsTable component={AdminRolesTable} titles={titles} items={admins} addModal={addModal}/>

      <Modal component={FormAdminRoles} addModal={addModal} modalClass={modalClass} />
    </div>
    </div>
  )
}
