// Importing 3rd party components
import { Button } from 'antd'

const SectionOne = () => {
    return (
        <div id='section-one'>
				<h1 id='section-one-large-text'>The Web3 solution to aquisitions and mergers.</h1>
				<h3 id='section-one-small-text'>Source, bargain and execute</h3>
				<Button
					type='primary'
					shape='round'
					size='large'
					id='get-started-btn'
				>Get started with Manda</Button>
				<Button
					type='primary'
					shape='round'
					size='large'
					id='buy-mdt-btn'
				>Buy $MDT</Button>
		</div>
    )
}

export default SectionOne