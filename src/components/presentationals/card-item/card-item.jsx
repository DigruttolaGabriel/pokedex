import { Card, NavLink, Button } from "react-bootstrap"

const CardItem = () => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>Jorge</Card.Title>
                    <Card.Text>
                        Jorge tiene descripcion
                    </Card.Text>
                    <Card.Text>
                        Jorge tiene mas descripcion
                    </Card.Text>
                    <NavLink to={`/product/`} className="link-no-decoration">
                        <Button variant="primary">Ver detalle</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CardItem;