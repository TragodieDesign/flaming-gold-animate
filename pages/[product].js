import Head from 'next/head'
import styles from '../styles/Product.module.css'
import {useRouter} from 'next/router'
import {motion} from 'framer-motion'
import Link from 'next/link'


export default function Product() {
    const {
        query : { product },
    } = useRouter();
  
    return (
    <div className={styles.container}>
              <Head>
        <title>{product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    
<body className={styles.main}>
<motion.h1 layoutId="store-title" class="store-title">{product}</motion.h1>
<Link href="/"><a>
    <div class="product-container">
      <motion.img 
      layoutId={product}
      className={styles.image} 
      src={product + ".png"}/>   
      </div>
      
      </a>
      </Link>
      </body>
    </div>
  )
}
