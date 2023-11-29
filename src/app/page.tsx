import { ExperienceItem } from "@/entities/experience-item";
import { ProjectItem } from "@/entities/project-item";
import { aboutMe, experience, myEducation, projects, skills } from "@/shared/config/constants";
import { ContactLink, Heading, LeftBorder, Text } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { Metadata } from "next";
import styles from './styles.module.scss';

export const metadata: Metadata = {
    title: 'thrnrhhl',
    description: 'Фронтенд-разработчик — Яковлев Павел',
    keywords: 'фронтенд, разработчик, портфолио, Middle, лидер команды, веб-приложения, middle frontend, мидл фронтенд'
}

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            <div>

                <Heading as="h1" className="text-right">
                    Меня зовут Павел <br /> я фронтенд-разработчик
                </Heading>

                <div className={styles.main__wrapper} aria-label="Опыт работы">
                    <Heading as="h2">Опыт работы<br />3 года 2 месяца</Heading>
                    {experience.map(key => <ExperienceItem key={key.company} {...key} />)}
                </div>

                <div className={styles.main__wrapper} aria-label="Навыки">
                    <Heading as="h2">Навыки</Heading>
                    <div className={styles.main__wrapper_skills}>
                        {skills.map(key => <img key={key} src={key} alt="Навык" />)}
                    </div>
                </div>

                <div className={styles.main__wrapper} aria-label="Образование">
                    <Heading as="h2">Образование</Heading>
                    <LeftBorder className={styles.main__wrapper_education}>
                        <Text className="whitespace-break-spaces">{myEducation}</Text>
                    </LeftBorder>
                </div>

                <div className={styles.main__wrapper} aria-label="Обо мне">
                    <Heading as="h2">Обо мне</Heading>
                    <LeftBorder className={styles.main__wrapper_me}>
                        <Text className="whitespace-break-spaces">{aboutMe}</Text>
                    </LeftBorder>
                </div>

                <div className={styles.main__wrapper} aria-label="Проекты">
                    <Heading as="h2">Проекты</Heading>
                    <div className={styles.main__wrapper_project}>
                        {projects.map((key) => <ProjectItem key={key.name} {...key} />)}
                    </div>
                </div>

                <div className={styles.main__wrapper} aria-label="Контакты">
                    <Heading as="h2">Контакты</Heading>
                    <div className={styles.main__wrapper_contact}>
                        <ContactLink source="https://t.me/thrnrhhl" type="1">Telegram</ContactLink>
                        <ContactLink source="https://tenchat.ru/thrnrhhl" type="2">TenChat</ContactLink>
                        <ContactLink source="https://github.com/thrnrhhl" type="3">GitHub</ContactLink>
                        <ContactLink source="" type="4">thrnrhhl@yandex.ru</ContactLink>
                    </div>
                </div>

            </div>
        </main>
    );
}