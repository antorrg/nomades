import React, { useState } from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

const InfoFormField = ({title, info, place}) => {
    const finalTitle = title? title : 'Información'
    const finalInfo = info? info : 'Para que esto funcione encerrar todo en un div con "className="form-group".'
    const finalPlace = place? place : 'right'
  return (

        <>
        <OverlayTrigger
          trigger="click"
          placement={finalPlace}
          rootClose
          overlay={
            <Popover id="popover-basic">
              <Popover.Header as="h3">{finalTitle}</Popover.Header>
              <Popover.Body>
                {finalInfo}
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" className="ms-2">
            ?
          </Button>
        </OverlayTrigger>
        </>
  );
};

export default InfoFormField;
