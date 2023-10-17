import Link from "next/link";

const Header = () => {
	return (
		<header className="border-b-[1px] border-cyan-350 border-spacing-x-5 mb-10">
			<ul className="flex gap-5 mb-5">
				<li>
					<Link className="hover:text-red-400" href="/">Главная</Link>
				</li>
				<li>
					<Link className="hover:text-red-400" href="/about">О компании</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;