import Alert from 'react-bootstrap/Alert';

function AlertaVerde({mensaje, variant}) {
  return (
    <>
        <Alert  variant={variant}>
          {mensaje}
        </Alert>
    </>
  );
}

export default AlertaVerde;