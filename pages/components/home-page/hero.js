import Image from 'next/image';
import classes from './hero.module.css'


function Hero() {
return <section className={classes.hero}>
    <div className={classes.image}>
       <Image src='/images/site/bg-kids.png' alt='image alt' width={300} height={300} />
    </div>
    <h1>Hi, i am Fateme(elahe) Hashemi</h1>
    <p>This is Next.js blog used Api route and mongodb data base.</p>
</section>
}

export default Hero;