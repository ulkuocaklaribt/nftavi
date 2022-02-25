import React from 'react'
import Link from 'next/link'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../assets/foto.png')] before:bg-cover before:bg-center before:opacity-50 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              İlk Adımı Tamamladın!
            </div>
            <div className={style.description}>
              Şimdi NFT avlama zamanı!
            </div>
            <div className={style.ctaContainer}>
              <Link href="/collections/0x66a576A977b7Bccf510630E0aA5e450EC11361Fa">
              <button className={style.accentedButton}>Koleksiyon</button>
        </Link>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg h-[30rem]"
              src="https://pbs.twimg.com/media/EyHkwr_WQAAZNfq.jpg"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://pbs.twimg.com/profile_images/1392818617163603968/rUxM-i-C_400x400.jpg"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Ahmet Yiğit Yıldırım</div>
                <a
                  className="text-[#1868b7]"
                  href="https://twitter.com/ayyildirim1"
                >
                  ayyildirim1
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
