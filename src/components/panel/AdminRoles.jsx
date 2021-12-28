import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useModal } from '../../Hooks/useModal';
import { AdminRolesTable } from './tables/AdminRolesTable';
import { DsTable } from './Utils/DsTable';
import { FormAdminRoles } from './Utils/FormAdminRoles';
import { Modal } from './Utils/Modal';

export const AdminRoles = () => {

  const [ addModal, modalClass ] = useModal();
  const [admins, setSdmins] = useState([]);
  const { id, token } = useSelector(state => state.auth);
  const mountedRef = useRef(true);

  const rangos = useCallback(
    () => {
      return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:8000/api/users/${id}/rangos?user_id=${id}`, {
          headers: {
            'x-token': token
          }
        }).then(({data}) => !mountedRef.current ? null : resolve(data))
          .catch(() => reject(`Error al cargar los rangos`));
      });
    },
    [id, token],
  );

  useEffect(() => {
    rangos().then((data) => setSdmins(data.msg))
      .catch((err) => console.log(err));

    return () => {
      mountedRef.current = false
    }
  }, [rangos]);

  const titles = [
    'ID',
    'Name',
    'Flags',
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
