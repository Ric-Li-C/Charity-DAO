import React from 'react'
import { Link } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const Navbar: React.FC = () => {
	return (
		<nav className="bg-brown-750 py-4 flex justify-center">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<img
						src="charityDao.png"
						width={50}
						height={50}
						alt="Charity Dao"
						className="rounded-lg hover:filter hover:brightness-120"
					/>
					<div className="text-white font-bold text-xl">
						<Link
							to="/"
							className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
						>
							Charity DAO
						</Link>
					</div>
				</div>
				<ul className="flex items-center space-x-4 text-white">
					<li>
						<Link
							to="/list"
							className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
						>
							Reviewers
						</Link>
					</li>
					<li>|</li>
					<li>
						<Link
							to="/apply"
							className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
						>
							Apply
						</Link>
					</li>
					<li>|</li>
					<li>
						<Link
							to="/update"
							className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white"
						>
							Update
						</Link>
					</li>
				</ul>
				<div className="flex items-center space-x-4">
					<ConnectButton
						accountStatus="address"
						showBalance={false}
					/>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
