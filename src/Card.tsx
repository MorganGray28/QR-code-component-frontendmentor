import './Card.css';
import qrCodeImage from './assets/image-qr-code.png';

function Card() {
	return (
		<div className='card--container'>
			<img className='card--img' src={qrCodeImage} alt='qr code' />
			<div className='card--text'>
				<p className='card--text-header'>Improve your front-end skills by building projects</p>
				<p className='card--text-subheader'>
					Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
				</p>
			</div>
		</div>
	);
}

export default Card;
