import Link from "next/link";

export interface NavigationMenuProps extends React.ComponentProps<"nav"> { }

export function NavigationMenu(props: NavigationMenuProps) {
    return (
        <nav id="navigation-menu" {...props}>
            <ul className="list">
                <li className="list-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="list-item">
                    <Link href="/projects">Projects</Link>
                </li>
                <li className="list-item">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}