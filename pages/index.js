import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[url('../assets/siyah.jpg')] `,
  button: `mt-2 border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
  label: `mb-2 text-white`
}

export default function Home() {
  const { address, connectWallet } = useWeb3()
  const [givenName, setName] = useState("");
  const [givenCity, setCity] = useState("");

  const welcomeUser = (userName,userCity, toastHandler = toast) => {
    toastHandler.success(
      `${userName !== '' ? ` ${userName}` : ''} Tekrar Hoşgeldin!`,
      {
        style: {
          background: '#04111d', 
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: givenName,
        userCity: givenCity,
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName,result.userCity)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position="bottom-left" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <label className={style.label}>
              İsminiz: 
            </label>
              <input value={givenName} onInput={e => setName(e.target.value)} />
            <label className={style.label}>
              Şehriniz:
            </label>
              <input value={givenCity} onInput={e => setCity(e.target.value)} />
          <button
            className={style.button}
            onClick={ () => connectWallet('injected')}
          >
            Cüzdanınızı Bağlayın
          </button>
          <div className={style.details}>
            Bu projeyi çalıştırmak için
            <br /> Chrome tarayıcısına ihtiyacınız var.
          </div>
        </div>
      )}
    </div>
  )
}
