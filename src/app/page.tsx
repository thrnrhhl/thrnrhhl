import { projects } from '@/shared/config/constants';
import { assets } from '@/shared/config/images'
import { Resume } from '@/widgets/resume';
import { Github, Link } from 'lucide-react';
import Image from 'next/image';
import NextLink from 'next/link';

export default function Home() {

  return (
    <main className="container m-auto h-full">
      <div className="flex flex-col lg:flex-row gap-[50px] min-h-screen p-[50px] border-b">
        <Image src={assets.me} alt="me" width="650" height="456" className="object-cover w-full flex-1 lg:w-auto" />
        <div className="flex flex-col justify-center items-center w-full mt-[40px] lg:mt-0">
          <Image src={assets.logo_black} alt="logo" width="120" height="102" className="flex-1" />
          <h1 className="text-[30px] lg:text-[50px] font-black text-[#242424]">Яковлев Павел</h1>
          <p className="text-[16px] font-medium text-[#242424]">Middle frontend-разработчик</p>
        </div>
      </div>

      <Resume />

      {projects.map((key, index) => (
        <section aria-label={key.name} className="min-h-screen p-[16px] lg:p-[50px] gap-[0px] flex flex-col justify-center lg:grid lg:grid-cols-12 lg:items-center border-b">
          <Image
            src={key.image}
            width="940"
            height="570"
            alt="karnast"
            className="lg:col-span-7 w-full lg:w-auto"
          />
          <div className="lg:col-span-5 mt-0">
            <h2 className="text-[40px] font-bold text-[#242424]">{key.name}</h2>
            <p className="text-md text-[#242424] whitespace-pre-line">{key.description}</p>
            <div className="mt-[20px] flex items-center justify-center gap-[10px]">
              {key.link && (
                <NextLink href={key.link}>
                  <Link />
                </NextLink>
              )}
              {key.github && (
                <NextLink href={key.github}>
                  <Github />
                </NextLink>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
