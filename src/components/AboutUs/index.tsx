import styles from './styles.module.css'
import arrowLeftBlackIcon from '../../../public/icons/arrowLeftBlackIcon.svg'
import arrowRightBlackIcon from '../../../public/icons/arrowRightBlackIcon.svg'

const AboutUs = () => {
    return (
        <section className={styles.about_us_container}>
            <h1 className={styles.about_us_title}>About us</h1>
            <img src={'images/about_us_video_preview.jpeg'} alt={'video_preview'} className={styles.video_preview} />

            {/* TEAM SECTION */}
            <section className={styles.team_section_container}>
                <div className={styles.team_section_discription}>
                    <div>
                        <h2 className={styles.team_section_title}>TEAM</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sed urna a faucibus.
                            Pellentesque mi nisl, mollis convallis metus id, congue semper neque. Sed suscipit eget
                            ipsum ut gravida. Fusce
                        </p>
                    </div>

                    <nav className={styles.team_section_toggle_container}>
                        <button className={styles.team_section_toggle_button}>
                            <img src={arrowLeftBlackIcon} alt={'arrowLeftBlackIcon'} />
                        </button>
                        <button className={styles.team_section_toggle_button}>
                            <img src={arrowRightBlackIcon} alt={'arrowRightBlackIcon'} />
                        </button>
                    </nav>
                </div>

                <div className={styles.team_section_members_container}>
                    <div className={styles.team_section_members_card}>
                        <img src={'images/team_member.png'} alt={'team_member'} className={styles.team_member_image} />
                        <p>ST. MECHANIC</p>
                        <p>DAVE JOHNSON</p>
                    </div>
                    <div className={styles.team_section_members_card}>
                        <img src={'images/team_member.png'} alt={'team_member'} className={styles.team_member_image} />
                        <p>ST. MECHANIC</p>
                        <p>DAVE JOHNSON</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default AboutUs
