import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol,MDBBtn,MDBIcon} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter backgroundColor='primary' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>

           
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
        <MDBIcon fab icon='facebook-f' size='lg' />
      </MDBBtn>
              </li>
              <li>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
        <MDBIcon fab icon='twitter' size='lg' />
      </MDBBtn>
              </li>
              <li>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
        <MDBIcon fab icon='google' size='lg' />
      </MDBBtn>
              </li>
              <li>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
        <MDBIcon fab icon='instagram' size='lg' />
      </MDBBtn>
              </li>
            </ul>
          </MDBCol>

          
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}