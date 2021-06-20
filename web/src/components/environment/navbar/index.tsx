import { Link } from 'react-router-dom';
import { NavbarItem } from './types'

export interface NavbarProps {
	items: NavbarItem[],
}

export function Navbar(props: NavbarProps) {
	return (
		<div>
			<ul>
				{props.items.map((item, idx) =>
					<li key={idx}>
						<Link to={item.path}>
							{item.title}
						</Link>
					</li>
				)}
			</ul>
			<hr />
		</div>
	)
}