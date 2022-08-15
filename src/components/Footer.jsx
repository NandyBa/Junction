// Importing 3rd party components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import{ Button } from 'antd';

// Importing images
import MandaLogoWhite from '../images/white_logo.png'
import DiscordLogo from '../images/discord_logo.png'

const Footer = () => {
    return (
        <Container fluid style={{'padding': '0px'}} id='footer-container'>
            <div id='footer-line'></div>
            <Row style={{'height': '100%'}}>
                <Col>
                    <img id='logo-img-header' src={ MandaLogoWhite } alt='Manda logo'></img>
                </Col> 
            </Row>
        </Container>
    )
}

export default Footer