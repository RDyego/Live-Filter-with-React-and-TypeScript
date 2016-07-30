import * as React from 'react';

export const Item = (props:any) =>
    <li>
        <div className="row-fluid">
          <p>
            <img src={props.image} alt={props.title}/>
          </p>
        </div>
        <div className="row-fluid">
          <p>{props.title}</p>
        </div>
        <div className="row-fluid">
          <p>Solicitante: {props.requester}</p>
        </div>
        <div className="row-fluid">
          <p>Status: {props.status}</p>
        </div>
    </li>
