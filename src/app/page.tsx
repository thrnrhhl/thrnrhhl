import { assets } from '@/shared/config/images'
import Image from 'next/image'

export default function Home() {

  const classesP = 'text-md text-[#242424]';
  const classesH2 = 'text-[30px] text-[#242424] font-medium';
  return (
    <main className="container m-auto h-full">
      <div className="flex flex-col lg:flex-row gap-[10px] min-h-screen p-[50px] border-b">
        <Image src={assets.me} alt="me" width="650" height="456" className="object-cover w-full flex-1 lg:w-auto" />
        <div className="flex flex-col justify-center items-center w-full mt-[40px] lg:mt-0">
          <Image src={assets.logo_black} alt="logo" width="120" height="102" className="flex-1" />
          <h1 className="text-[30px] lg:text-[50px] font-black text-[#242424]">Яковлев Павел</h1>
          <p className="text-[16px] font-medium text-[#242424]">Middle frontend-разработчик</p>
        </div>
      </div>

      <div className="border-b p-[16px] lg:p-[50px]">
        <div className="mb-[30px]">
          <h2 className={classesH2}>Профессиональный профиль:</h2>
          <p className={classesP}>
            Я опытный фронтенд-разработчик, специализирующийся на создании высококачественных веб-приложений с использованием технологий React. С опытом работы более 3 лет, я продвинулся от уровня джуна до среднего уровня и в начале 2023 года был назначен тимлидом в команде из 9 человек.
          </p>
        </div>
        <div className="mb-[30px]">
          <h2 className={classesH2}>Навыки и технологии:</h2>
          <div className="flex flex-col gap-y-[10px]">
            <p className={classesP}>
              <span className="font-medium">Фронтенд разработка: </span>
              ReactJS, Next.js, Redux Toolkit, WebSocket, Tailwind CSS, Featured Sliced Design.
            </p>
            <p className={classesP}>
              <span className="font-medium">Работа с формами: </span>
              Formik, Yup.
            </p>
            <p className={classesP}>
              <span className="font-medium">Аутентификация: </span>
              Next-Auth.
            </p>
            <p className={classesP}>
              <span className="font-medium">Серверная разработка: </span>
              Node.js, Express.
            </p>
            <p className={classesP}>
              <span className="font-medium">Node.js, Express: </span>
              MongoDB (Mongoose), небольшой опыт работы с Prisma для MongoDB
            </p>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className={classesH2}>Опыт работы:</h2>
          <p className="text-md text-[#242424] mb-[15px]">
            Тимлид и фрондент-разработчик уровня middle
          </p>

          <p className="text-md text-[#242424] mb-[15px]">
            ООО "Экспа софтвар" - Россия, Чебоксары
            <br />
            Март 2021 - Июль 2023
          </p>
          <div className="flex flex-col gap-y-[10px]">
            <p className={classesP}>- Работал как фронтенд-разработчик, специализирующийся на React и ванильном Javascript, и быстро продвигался по карьерной лестнице от джуна до мидл уровня.</p>
            <p className={classesP}>- Разрабатывал и поддерживал фронтенд-часть веб-приложений, используя технологии React, Next.js и Redux Toolkit.</p>
            <p className={classesP}>- Работал в тесном взаимодействии с бэкенд-разработчиками для интеграции фронтенда и бэкенда.</p>
            <p className={classesP}>- Назначен тимлидом в команде из 9 человек, ответственным за координацию работы и развитие проектов</p>
            <p className={classesP}>- Проводил код-ревью, обеспечивал соблюдение стандартов кодирования и высокого качества кода</p>
            <p className={classesP}>- Брал на себя сложные задачи и работал над ними, если кто-то из членов команды не мог справиться или требовалось быстрое решение.</p>
            <p className={classesP}>- Общался с членами команды, помогая решать технические задачи и поддерживая их профессиональное развитие.</p>
            <p className={classesP}>- В основном занимался разработкой MES-систем и учетных систем</p>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className={classesH2}>Образование:</h2>
          <div className="flex flex-col gap-y-[10px]">
            <p className="text-md text-[#242424] font-medium text-lg">Чебоксарский электромеханический колледж</p>
            <p className={classesP}>Сентябрь 2017 - Июнь 2021</p>
            <p className={classesP}>Специальность: Информационные технологии</p>
            <p className={classesP}>Квалификация: Разработчик веб и мультимедийных приложений</p>
            <p className={classesP}>Окончил с красным дипломом</p>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className={classesH2}>Контактная информация:</h2>
          <div className="flex flex-col gap-y-[10px]">
            <p className={classesP}>Телеграм: https://t.me/thrnrhhl</p>
            <p className={classesP}>Электронная почта: thrnrhhl@gmail.com</p>
          </div>
        </div>
      </div>

      <div id="karnast" className="min-h-screen p-[16px] lg:p-[50px] gap-[40px] flex flex-col justify-center lg:grid lg:grid-cols-12 lg:items-center border-b">
        <Image
          src={assets.karnast}
          width="940"
          height="570"
          alt="karnast"
          className="lg:col-span-7 w-full lg:w-auto"
        />
        <div className="lg:col-span-5 mt-[40px] lg:mt-0">
          <h2 className="text-[40px] font-bold mb-[30px] text-[#242424]">Карнаст</h2>
          <p className="text-md text-[#242424]">
            Сейчас это является мои основным проектом.
            Цель проекта это раннее выявление одаренности и профессиональных предпочтений обучающихся.
            <br /><br />
            Опрос был разработам профессором Чувашской Республики Волковым Олегом Гавриловичем он и является частью нашей команды.
            Проект был проведен в рамках тестирования по всем школам Чебоксар и в одной гимназии Казани в мае 2023 года и с 1 сентября 2023 года запущен по все Чувашской Республике.
            Приложение предоставляет возмоность учителям/завучам/директорам смотреть статистику по классам и определять в каких классах больше людей по тем или иным направлениям и опроса.
            Также учащиеся могут после прохождения опроса посмотреть какие колледжи/вузы/курсы в России подходят им исходя из пройденного опроса.
            <br /><br />
            На проекте я занимаюсь всей разработкой фронт и бэк, по фронту не много помогает друг который тоже является нашим участником.
          </p>
        </div>
      </div>

      <div id="karnast" className="min-h-screen p-[16px] lg:p-[50px] gap-[40px] flex flex-col justify-center lg:grid lg:grid-cols-12 lg:items-center border-b">
        <Image
          src={assets.kalkkal}
          width="940"
          height="570"
          alt="karnast"
          className="lg:col-span-7 w-full lg:w-auto"
        />
        <div className="lg:col-span-5 mt-[40px] lg:mt-0">
          <h2 className="text-[40px] font-bold mb-[30px] text-[#242424]">KalKkal</h2>
          <p className="text-md text-[#242424]">
            Проект создан чтобы расчитывать нужную норму калорий для человека. На сайте есть личный кабинет в котором можно добавлять свои приемы пищи в котором можно отслеживать сколько калорий употребили в день/неделю, также есть график который показывать текущую и прошлую неделю активности по поеданию.
            <br /><br />

            Проект делал для себя чтобы удобно было вести учет сколько пищи я съедаю :)
          </p>
        </div>
      </div>

      <div id="karnast" className="min-h-screen p-[16px] lg:p-[50px] gap-[40px] lg:grid  lg:grid-cols-12 items-center border-b">
        <Image
          src={assets.generepass}
          width="940"
          height="570"
          alt="karnast"
          className="lg:col-span-7 w-full lg:w-auto"
        />
        <div className="lg:col-span-5 mt-[40px] lg:mt-0">
          <h2 className="text-[40px] font-bold mb-[30px] text-[#242424]">Генератор паролей</h2>
          <p className="text-md text-[#242424]">
            Этот проект делал в самом начале когда обучался React`у, помимо генерации пароля можно сохранить пароли(они хранятся в IndexedDB) и их можно скачать
          </p>
        </div>
      </div>

      <div id="karnast" className="min-h-screen p-[16px] lg:p-[50px] gap-[40px] lg:grid  lg:grid-cols-12 items-center border-b">
        <Image
          src={assets.gym_center}
          width="940"
          height="570"
          alt="karnast"
          className="lg:col-span-7 w-full lg:w-auto"
        />
        <div className="lg:col-span-5 mt-[40px] lg:mt-0">
          <h2 className="text-[40px] font-bold mb-[30px] text-[#242424]">GYM-center</h2>
          <p className="text-md text-[#242424]">
            Макет был взят из телеграм-канала "True Figma", просто верстка
          </p>
        </div>
      </div>
    </main>
  )
}
