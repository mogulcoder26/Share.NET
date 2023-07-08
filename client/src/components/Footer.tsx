import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Footer.css"
function Footer() {
  return (
    <Card className="text-center">
      <Card.Footer className='tag' >
      Created by Soubhik Gon
      <br />
      {new Date().getUTCFullYear().toString()}</Card.Footer>
    </Card>
  );
}

export default Footer;