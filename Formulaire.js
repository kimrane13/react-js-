

  
import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

export default function Formulaire() {
  return (
    <div style={{ width: '23rem'}}>
      <MDBInput label='name' id='formControlLg' type='text' size='lg' />

      <br />

      <MDBInput label='e-mail' id='formControlDefault' type='text' />
      <br />

      <MDBInput label='Confirme your e-mail' id='formControlDefault' type='text' />

      <br />

      <MDBInput label='Passeword' id='formControlSm' type='text' size='sm' />
    </div>
  );
}