import { experience, projects, skills } from "@/shared/config/constants";
import Image from "next/image";

export default function Page() {
    return (
        <main className="container m-auto h-full bg-[#fff] dark:bg-[#000] min-h-screen flex flex-col lg:flex-row py-[20px] lg:py-[40px] px-[16px] lg:px-[0px] gap-[50px]">
            <aside className="sticky top-[16px] lg:top-[50%] lg:translate-y-[-50%] flex-shrink-0 h-fit flex justify-center lg:flex-col gap-[20px] ">
                <div className="flex justify-center mb-[20px]">
                    <Image src="/logo_black.svg" alt="me" width="118" height="96" className="dark:hidden w-[80px] h-[68px] lg:w-[118px] lg:h-[96px]" />
                    <Image src="/logo_white.svg" alt="me" width="118" height="96" className="hidden dark:block w-[80px] h-[68px] lg:w-[118px] lg:h-[96px]" />
                </div>
                <Image src="/me.png" alt="me" width="208" height="404" className="h-[80px] object-contain lg:h-auto" />
                <div className="flex justify-center lg:mt-[20px] flex-shrink-0">
                    <Image src="/pepa_v_ahue.gif" alt="me" width="128" height="128" className="h-[80px] w-[80px] lg:w-[128px] lg:h-[128px]" />
                </div>
            </aside>

            <div>
                <h1 className="text-[#000] dark:text-[#fff] text-5xl font-black uppercase text-right">
                    Меня зовут Павел <br /> я фронтенд-разработчик
                </h1>

                <div className="mt-[30px] lg:mt-[50px]" aria-label="Опыт работы">
                    <h2 className="text-[#000] dark:text-[#fff] text-2xl lg:text-3xl font-black uppercase">Опыт работы _ 3 года 2 месяца</h2>

                    {experience.map(key => (
                        <div className="border-l border-l-[4px] border-l-[#000] dark:border-l-[#fff] pl-[10px] mt-[15px] lg:mt-[20px]">
                            <p className="text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm">{key.company}</p>
                            <p className="text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm">{key.city}</p>
                            <p className="text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm">{key.position}</p>
                            <p className="text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm">{key.date}</p>
                            <p className="text-[#000] dark:text-[#fff] uppercase mt-[15px] font-bold text-xs lg:text-sm">{key.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-[30px] lg:mt-[50px]" aria-label="Навыки и технологии">
                    <h2 className="text-[#000] dark:text-[#fff] text-2xl lg:text-3xl font-black uppercase">Навыки и технологии</h2>
                    <div className="flex flex-wrap gap-[10px] mt-[20px]">
                        {skills.map(key => <img key={key} src={key} alt="next.js" />)}
                    </div>
                </div>

                <div className="mt-[30px] lg:mt-[50px]" aria-label="Образование">
                    <h2 className="text-[#000] dark:text-[#fff] text-2xl lg:text-3xl font-black uppercase">Образование</h2>
                    <div className="border-l border-l-[4px] border-l-[#000] dark:border-l-[#fff] pl-[10px] mt-[20px]">
                        <p className="text-[#000] dark:text-[#fff] uppercase text-xs lg:text-sm font-bold">Среднее специальное образование</p>
                        <p className="text-[#000] dark:text-[#fff] uppercase text-xs lg:text-sm font-bold">Чебоксары</p>
                        <p className="text-[#000] dark:text-[#fff] uppercase text-xs lg:text-sm font-bold">«Межрегиональный центр компетенций – Чебоксарский электромеханический колледж»</p>
                        <p className="text-[#000] dark:text-[#fff] uppercase text-xs lg:text-sm font-bold">Информационные системы и программирование, Разработчик веб и мультимедийных приложений</p>
                        <p className="text-[#000] dark:text-[#fff] uppercase text-xs lg:text-sm font-bold">2017 - 2021</p>
                    </div>
                </div>

                <div className="mt-[30px] lg:mt-[50px]" aria-label="Обо мне">
                    <h2 className="text-[#000] dark:text-[#fff] text-2xl lg:text-3xl font-black uppercase">Обо мне</h2>
                    <p className="border-l border-l-[4px] border-l-[#000] dark:border-l-[#fff] pl-[10px] text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm mt-[20px]">
                        Я фронтенд-разработчик с коммерческим опытом 3 года.
                        <br /><br />
                        Работая в компании я вырос с позиции junior до middle уровня, спустя время меня назначили тимлидом команды которая состояла из 9 человек (те кто занимался фронтенд-разработкой). В мои обязанности входило ревью кода, найм сотрудников(проводил технические собеседования), решение возникших проблем в решении задач у коллег, обсуждение новых фич и распределение задач.
                        <br /><br />
                        В веб-разработке меня вдохновляет создание административных панелей, учетных систем и корпоративных MES-платформ. Разработка таких приложений позволяет мне объединить мои профессиональные навыки с моей страстью к оптимизации рабочих процессов.
                        <br /><br />
                        Мое сильное качество - это выдающаяся выдержка и способность эффективно управлять несколькими проектами одновременно. Это позволяет мне оставаться продуктивным и качественно выполнять поставленные задачи.
                        <br /><br />
                        Мой основной рабочий стек в разработке клиентской части: React, NextJS, Redux-Toolkit, Tailwindcss, Typescript.
                        <br /><br />
                        Основной стек в разработке серверной части: Nodejs, Exress.js, MongoDB, Mongoose, Typescript.
                    </p>
                </div>

                <div className="mt-[30px] lg:mt-[50px]" aria-label="Проекты">
                    <h2 className="text-[#000] dark:text-[#fff] text-2xl lg:text-3xl font-black uppercase">Проекты</h2>
                    <div className="flex flex-col gap-[20px]">
                        {projects.map((key) => (
                            <div className="flex flex-col lg:flex-row items-center">
                                <img src={key.img} alt="karnast" className="max-w-[688px] w-full" />
                                <div>
                                    <p className="text-[#000] dark:text-[#fff] text-xs lg:text-sm uppercase font-bold mb-[10px]">{key.name}</p>
                                    <p className="text-[#000] dark:text-[#fff] text-xs lg:text-sm uppercase font-bold">{key.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-[30px] lg:mt-[50px]" aria-label="Контактная информация">
                    <h2 className="text-[#000] dark:text-[#fff] text-2xl lg:text-3xl font-black uppercase">Контактная информация</h2>
                    <a href="https://t.me/thrnrhhl" target="_blank" className="block border-l border-l-[4px] border-l-[#2ea6d9] dark:border-l-[#2ea6d9] pl-[10px] text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm mt-[20px]">
                        Telegram
                    </a>
                    <a href="https://tenchat.ru/thrnrhhl" target="_blank" className="block border-l border-l-[4px] border-l-[#fc3234] pl-[10px] text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm mt-[10px]">
                        TenChat
                    </a>
                    <a href="https://github.com/thrnrhhl" target="_blank" className="block border-l border-l-[4px] border-l-[#242424] pl-[10px] text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm mt-[10px]">
                        GitHub
                    </a>
                    <p className="block border-l border-l-[4px] border-l-[orange] pl-[10px] text-[#000] dark:text-[#fff] uppercase font-bold text-xs lg:text-sm mt-[10px]">
                        thrnrhhl@yandex.ru
                    </p>
                </div>
            </div>
        </main >
    );
}