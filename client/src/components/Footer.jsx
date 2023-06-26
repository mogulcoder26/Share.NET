import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Footer >
      Created by Soubhik Gon
      <br />
      {new Date().getUTCFullYear().toString()}</Card.Footer>
    </Card>
  );
}

export default Footer;