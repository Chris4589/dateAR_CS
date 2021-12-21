import React from 'react';
import { useModal } from '../../Hooks/useModal';
import { ServerTable } from './tables/ServerTable';
import { DsTable } from './Utils/DsTable';
import { Modal } from './Utils/Modal';
import { FormServer } from './Utils/FormServer';

export const Servers = () => {

  const [ addModal, modalClass ] = useModal();

  const titles = [
    'ID',
    'Foto',
    'Server',
    'IP',
  ];

  const servers = [
    {
      id: 1,
      foto: 'https://www.logolynx.com/images/logolynx/2d/2d3f515fd4452cbd01c18e0fb6149eb2.jpeg',
      name: 'MxG Team | Zombie Escape',
      ip: '103.50.230.10.27015',
    },
    {
      id: 12,
      foto: 'https://www.logolynx.com/images/logolynx/2d/2d3f515fd4452cbd01c18e0fb6149eb2.jpeg',
      name: 'MxG Team | Zombie Plague',
      ip: '103.50.230.10.27016',
    },
    {
      id: 24,
      foto: 'https://www.logolynx.com/images/logolynx/2d/2d3f515fd4452cbd01c18e0fb6149eb2.jpeg',
      name: 'MxG Team | Capture The Flag',
      ip: '103.50.230.10.27018',
    }
  ];
  return (
    <div className="Ds__container">
      <DsTable component={ServerTable} titles={titles} items={servers} addModal={addModal}/>

      <Modal component={FormServer} addModal={addModal} modalClass={modalClass} />
    </div>
  )
}
