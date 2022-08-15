// Importing 3rd party components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Importing images
import MedalIcon from '../../images/medal_icon.png'

const SectionThree = () => {
    return (
        <div id='s3-container'>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'height': '200px'}}>
                <div id='s3-title-text'>The one-stop shop for all merger and aquisition activities</div>
            </div>
            <Container style={{'height': '800px'}}>
                <Row style={{'height': '100%', 'padding': '90px'}}>
                    <Col className='s3-box'>
                        <div id='s3-medal-container'>
                            <img id='s3-medal-icon' src={ MedalIcon } alt=''></img>
                            <text id='s3-medal-text'>Winner of Scalability prize at <span style={{'fontWeight': 'bolder'}}>ETHCC Hack 2022</span></text>
                        </div>
                        <div id='s3-text-container' style={{'height': '70%'}}>
                            <text style={{'fontSize': '14px'}}>
                                ✏️ <span style={{'fontWeight': 'bold'}}>Born during a hackathon</span><br></br>
                                Our hard working team brough this product to life with sclability in mind. No matter how big the problem, we can offer a solution.<br></br>
                                <br></br>
                                🧮 <span style={{'fontWeight': 'bold'}}>Game Theory brings fast, affordable and fair decisions for all parties</span><br></br>
                                Experience shows that Web3 Mergers and Aquisitions are complex transactions that derail founders' focus from day-to-day operations. 
                                We help mitigate the risks of value destruction by providing generic and tailor made services in line with client needs. <br></br>
                                <br></br>
                                🌐 <span style={{'fontWeight': 'bold'}}>We're a part of a global community of users serving as Merger and Aquisition blockchain experts</span><br></br>
                                They can provide a wide range of financial advisory services (M&A Target Valuation and Fairness Opinion), technology support (Execution) and leadership pre/post contract (Souring, Earnings Diligence, Post Close Strategy, Integration and Execution) execution to ensure the success of the transition.
                            </text>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionThree