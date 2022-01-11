import Link from 'next/link';
import { social } from '../site.config';

export default function Header() {
	return (
		<header className="site-container py-8 flex flex-col text-center md:flex-row md:text-left md:justify-between md:items-baseline w-full">
			<Link href="/">
				<a className="text-2xl text-gray-400 hover:text-gray-400">
					Mehmet Akif Duba
				</a>
			</Link>
			<nav className="space-x-4 items-center">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<Link href={social.twitter}>
					<a>Tweets</a>
				</Link>
				<Link href={social.github}>
					<a>Github</a>
				</Link>
				<Link href={social.github}>
					<a>Linkedin</a>
				</Link>
			</nav>
		</header>
	);
}
