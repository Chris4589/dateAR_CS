import React from 'react'

export const DatearItem = () => {
  return (
    <div className="Datear__items">
      <div className="Datear__item_server">
        <div className="Datear__item_header">
          <img className="Datear__item_img" src="https://www.logolynx.com/images/logolynx/2d/2d3f515fd4452cbd01c18e0fb6149eb2.jpeg" alt="" srcset="" />
          <h5 className="Datear__item_title">COMUNIDAD TUVIEJA</h5>
        </div>
        <div className="Datear__item_datas">
          <ul className="Datear__item_list">
            <li>Servidor Vieja Gaming #2 (AUTOMIX)</li>
            <li>Mapa actual de_inferno</li>
            <li>Jugadores 13/32</li>
          </ul>
        </div>
      </div>
      
      <div className="Datear__item_desc">
        <p>
          Es un servidor para que entre tu vieja a jugar!
          <br />
          IP: 127.0.0.1
        </p>
      </div>

      <div className="Datear__item_footer">
        <a href="https://github.com/Chris4589/dateAR_CS">
          Conectarse
        </a>
      </div>
      
    </div>
  )
}
