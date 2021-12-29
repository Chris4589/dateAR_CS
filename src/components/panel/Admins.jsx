import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { enviroments } from '../../enviroments';
import { useModal } from '../../Hooks/useModal';
import { AdminTable } from './tables/AdminTable';
import { DsTable } from './Utils/DsTable';
import { FormAdmin } from './Utils/FormAdmin';
import { Modal } from './Utils/Modal';

export const Admins = () => {
  const [ addModal, modalClass ] = useModal();
  const { id, token } = useSelector(state => state.auth);
  const [admins, setAdmins] = useState([]);
  const [servers, setServers] = useState([]);
  const [currenServer, setCurrenServer] = useState();
  const [lastPage, setlastPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const mountedRef = useRef(true);
  
  const adms = useCallback(
    async () => {
      try {
        if (currenServer === undefined) {
          return setAdmins([]);
        }
        const data = await axios.get(`${enviroments.address_host}/api/user/${id}/server/${currenServer}/admin?user_id=${id}&per_page=10&page=${currentPage}`, {
          headers: {
            'x-token': token
          }
        });
        return data.data;
      } catch (error) {
        return 'error al cargar admins';
      }
    },
    [id, token, currenServer, currentPage],
  );

  const svs = useCallback(
    () => {
      return new Promise((resolve, reject) => {
        axios.get(`${enviroments.address_host}/api/user/${id}/server?user_id=${id}`, {
          headers: {
            'x-token': token
          } 
        }).then(({data}) => !mountedRef.current ? null : resolve(data))
          .catch(() => reject('error cargar svs'));
      });
    },
    [id, token],
  );
  
  useEffect(() => {
    async function info() {

      const sv = await svs();
      setServers(sv?.msg);

      if (sv?.msg.length !== 0) {
        setCurrenServer(sv?.msg[0].id);
      }
    };

    info();
    return () => {
      mountedRef.current = false;
    }
  }, [svs]);

  useEffect(() => {
    async function info() {

      const adm = await adms();
      setAdmins(adm?.msg?.data);
      setlastPage(adm?.msg?.last_page || 1);
      setcurrentPage(adm?.msg?.current_page ||1);
    };

    info();
    return () => {
      mountedRef.current = false;
    }
  }, [adms, currenServer]);

  const titles = [
    'ID',
    'Name',
    'TYPE',
    'EXPIRATION',
  ];

  const onChange = (e) => {
    if (!e.target.value) {
      return;
    }
    setCurrenServer(e.target.value);
  }

  const handlePageClick = (event) => {
    if (event.selected+1 < 0) {
      return;
    }
    setcurrentPage(event.selected+1);
  }

  return (
    <div>
      <div className="Ds__container">
      <select onChange={onChange}>
        {
          !!servers && servers.map((sv) => (<option key={sv.id} value={sv.id}>{sv.name}</option>))
        }
        
      </select>
      <DsTable component={AdminTable} titles={titles} items={admins} addModal={addModal}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={lastPage}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      <Modal component={FormAdmin} addModal={addModal} modalClass={modalClass} />
    </div>
    </div>
  )
}
