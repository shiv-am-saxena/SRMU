import footerBanner from '../assets/Images/footerBanner.jpg'
import { Container } from './';
const Footer = () => {
	return (
		<div className='m-0 p-0'>
			<Container>
				<div className='w-full flex flex-col items-center justify-end p-0 h-[80vh]' style={{ background: `url(${footerBanner})`, backgroundSize: 'cover' }}>
					<div className='w-full rounded-t-[1%] bg-[#333333]'>
						<div className='w-full px-4 pt-6 pb-2 lg:px-10 lg:pt-10 text-white flex justify-center'>
							<hr className='w-[100%]' />
						</div>
						<div className="w-full flex flex-row gap-10 justify-evenly p-2 lg:p-5">
							<div className='w-96 list-none text-center text-white'>
								<h2 className='uppercase lg:text-2xl text-lg font-semibold pb-5'>Explore</h2>
								<ul className='flex text-sm lg:text-base flex-col gap-2'>
									<li>Home</li>
									<li>About Us</li>
									<li>How we work</li>
									<li>Services</li>
									<li>Works</li>
									<li>Contact</li>
								</ul>
							</div>
							<div className='w-[1px] border-[0.5px] border-white min-h-full'></div>
							<div className='w-96 text-center text-white'>
								<h2 className='uppercase text-lg lg:text-2xl font-semibold pb-5'>Get In Touch</h2>
								<ul className='flex flex-col text-sm lg:text-base gap-2'>
									<li><a href="mailto:developers@srmu.ac.in">developers@srmu.ac.in</a></li>
									<li>Shri Ramswaroop Memorial University<br />Deva Road, Barabanki - 225003</li>
									<li><a href="tel:+919838904666">+91-9838904666</a></li>
								</ul>
							</div>
						</div>
						<div className='w-full lg:px-10 px-4 pt-2 text-white flex justify-center'>
							<hr className='w-[100%] lg:w-[75%]' />
						</div>
						<div className='flex flex-col lg:flex-row lg:justify-around w-full p-5'>
							<div className='text-white text-sm font-normal'>
								Copyright &copy; {new Date().getFullYear()}  Shri Ramswaroop Memorial University
							</div>
							<div className='text-white text-sm font-normal'> Privacy Policy | Terms and Conditions</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Footer

