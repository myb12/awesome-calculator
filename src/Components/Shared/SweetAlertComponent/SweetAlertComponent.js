import React from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

const SweetAlertComponent = ({ show, setShow, message }) => {

    return (
        <div>
            <SweetAlert
                show={show}
                title=""
                text={message}
                onConfirm={() => setShow(false)}
            />
        </div>
    );
};

export default SweetAlertComponent;
