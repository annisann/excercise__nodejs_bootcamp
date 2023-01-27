import styles from "@/styles/about.module.css"

export default function About() {
  return (
    <div className={styles['body-container']}>
      <h1 className={styles.pagetitle}> about page. </h1>
      <div className={styles['text-container']}>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus, assumenda magnam atque facilis veniam cum id illo nostrum doloremque nulla sunt
          velit rerum quis vero rem ratione hic voluptates ipsum?
        </p>
      </div>
    </div>
  )
}
