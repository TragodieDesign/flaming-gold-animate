import Link from "next/link"
import styles from '../../styles/Home.module.css'
import Image from "next/image"; 
const Header = () =>(
    <div className={styles.header}>
        <div className={styles.logowrapper}>
            <Image src="/../public/icons/logo.png"  width={130} height={29}></Image>
        </div>
<div className={styles.navwrapper}>
<Link href="/">
<a className={styles.headerbutton}>
                Home
            </a>
        </Link>
        <Link href="/">
        <a className={styles.headerbutton}>
                Services
            </a>
        </Link>
        <Link href="/">
        <a className={styles.headerbutton}>
                About
            </a>
        </Link>
        <Link href="/">
            <a className={styles.headerbutton}>
                Contact-us
            </a>
        </Link>
</div>

    </div>
);
export default Header
