// Importing 3rd party components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Importing icons/images
import ExpandIcon from '../../images/expand_icon.svg'
import BuildIcon from '../../images/build_icon.svg'
import NetworkIcon from '../../images/network_icon.svg'


function SectionTwo() {
    return (
        <>
            <Container>
                <Row>
                    <div id='s2-title-container'>
                        <h1 id='s2-title-text'>Grow your business through mergers and aquisitions.</h1>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div className='s2-box'>
                            <img class='s2-image' id='s2-expand-icon' src={ ExpandIcon } alt=''></img>  
                            <h2 class='s2-text'id='s2-expand-text'>Expand your product line</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className='s2-box'>
                            <img class='s2-image' id='s2-build-icon' src={ BuildIcon } alt=''></img>  
                            <h2 class='s2-text'id='s2-build-text'>Build the unimaginable</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className='s2-box'>
                            <img class='s2-image' id='s2-network-icon' src={ NetworkIcon } alt=''></img>  
                            <h2 class='s2-text'id='s2-build-text'>Accelerate the network effect</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div id='st-overlay'>
                <div style={{'height': '100px'}}></div>
                <div id='st-underlay'></div>
            </div>
        </>
    )
}

export default SectionTwo