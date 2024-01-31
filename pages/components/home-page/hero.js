import Image from 'next/image';
import classes from './hero.module.css'


function Hero() {
return <section className={classes.hero}>
    <div className={classes.image}>
       <Image src='/images/site/bg-kids.png' alt='image alt' width={300} height={300} />
    </div>
    <h1>Hi, i am Elahe</h1>
    <p>I blog about development</p>
</section>
}

export default Hero;