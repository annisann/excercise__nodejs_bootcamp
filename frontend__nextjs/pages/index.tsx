import styles from "@/styles/home.module.css"

export default function Home() {
    return (

        <div className='h-screen w-screen items-center flex flex-col justify-center'>
            
            <h1 className={styles.pagetitle}> never gonna give u up ~ </h1>
            <div className="max-w-lg">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, assumenda magnam atque facilis veniam cum id illo nostrum doloremque nulla sunt
                    velit rerum quis vero rem ratione hic voluptates ipsum?
                </p>
            </div>
        </div>
    )
}