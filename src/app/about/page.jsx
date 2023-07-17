import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting beautiful award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            aperiam dolores minus possimus fugiat, aut neque cum sapiente? Eius
            vel excepturi at dicta voluptatibus illo quibusdam, autem possimus!
            Possimus ipsum voluptates fugiat ea nihil rerum ex hic recusandae
            velit optio ipsa sed reiciendis dolorem dolore dolor inventore
            <br />
            <br />
            fugit, in quae architecto perspiciatis magni impedit accusantium
            sequi. Omnis assumenda consequuntur minus quo laudantium dicta
            libero! Consectetur qui nostrum et enim, iste corporis esse! Earum
            voluptatem dolorem beatae sapiente nisi laudantium. In saepe
            doloribus quaerat pariatur odit esse beatae, voluptates.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do!</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
