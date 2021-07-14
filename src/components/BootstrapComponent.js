import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import photo from './photoleaf3.jpeg'


function BootstrapComponent() {
    return( 
    <div className="position-absolute top-0 start-0">
            <Card placement="right" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo}/>
            <Card.Body>
            <Card.Title>Feuille</Card.Title>
        <Card.Text>
            Unicorn four loko live-edge narwhal cred fashion axe irony marfa raw denim. Fingerstache chicharrones trust fund snackwave gastropub succulents try-hard viral. 
        </Card.Text>
        </Card.Body>
</Card>
</div>
    )
}

export default BootstrapComponent