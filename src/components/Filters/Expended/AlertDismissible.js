import React from 'react'
import Alert from 'react-bootstrap/Alert';

function AlertDismissible() {
   const [show, setShow] = useState(true);

   if (!show) {
     return (
       <Alert variant='danger' onClose={() => setShow(false)} dismissible>
         This is a {variant} alert with{' '}
         <Alert.Link href='#'>an example link</Alert.Link>. Give it a click if you like.
       </Alert>
     );
   }
   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissible
