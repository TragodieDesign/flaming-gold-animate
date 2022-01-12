import Link from "next/link"

import Image from "next/image"; 
const Header = () =>(
    <div class="header">
        <div class="logo-wrapper">
            <Image src="/../public/icons/logo.png"  width={130} height={29}></Image>
        </div>
<div class="nav-wrapper">
<Link href="/">
            <a class="header-button">
                Home
            </a>
        </Link>
        <Link href="/">
            <a class="header-button">
                Services
            </a>
        </Link>
        <Link href="/">
            <a class="header-button">
                About
            </a>
        </Link>
        <Link href="/">
            <a class="header-button">
                Contact-us
            </a>
        </Link>
</div>

    </div>
);
export default Header
