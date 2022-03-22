import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
// import EZButton from '../components/EZButton';
// import EZNavbar from '../components/EZNavbar';
import { IoMdCall } from 'react-icons/io';
import { BiLockAlt } from 'react-icons/bi';
import { BsDownload, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// import style from '../styles/scss/Home.module.scss';


export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>EZ Wallet</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* <EZNavbar /> */}
      <header className={` d-flex justify-content-center align-items-center`}>
        <div className="container content text-center">
          <h1 className='fw-bolder text-white fs-1 lh-base'>
            Awesome App <br /> For Saving Time.
          </h1>
          <p className='text-white my-4 lh-lg'>
            We bring you a mobile app for banking problems that <br /> oftenly wasting much of your times.
          </p>
          {/* <EZButton onClick={() => router.push('/login')} variant='white' className='px-lg-5 py-lg-3'>Try It Free</EZButton> */}
        </div>
      </header>
      <section className='ez-wallet-benefit text-black bg-semi-white'>
        <div className="wrapper container py-5">
          <h2 className='fw-bolder text-center mt-4'><span className='text-color1'>Why</span> Choose EZ Wallet?</h2>
          <p className='text-center mt-4'>We have some great features from the application and it’s totally free <br /> to use by all users around the world.</p>

          <div className="benefits row">
            <div className='col-12 col-md-4 mb-3 mb-md-0'>
              <div className={` support d-flex flex-column align-items-center py-4 py-lg-5 px-3 px-lg-5 rounded-3`}>
                <div className="icon rounded-circle bg-color1 p-3 mb-4">
                  <IoMdCall className='text-white fs-3' />
                </div>
                <h3 className='fw-bold mb-4'>24/7 Support</h3>
                <p className='text-center'>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
              </div>
            </div>
            <div className='col-12 col-md-4 mb-3 mb-md-0'>
              <div className={` privacy benefit d-flex flex-column align-items-center py-4 py-lg-5 px-3 px-lg-5 rounded-3`}>
                <div className="icon rounded-circle bg-color1 p-3 mb-4">
                  <BiLockAlt className='text-white fs-3' />
                </div>
                <h3 className='fw-bold mb-4'>Data Privacy</h3>
                <p className='text-center'>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
              </div>
            </div>
            <div className='col-12 col-md-4 mb-3 mb-md-0'>
              <div className={` download benefit d-flex flex-column align-items-center py-4 py-lg-5 px-3 px-lg-5 rounded-3`}>
                <div className="icon rounded-circle bg-color1 p-3 mb-4">
                  <BsDownload className='text-white fs-3' />
                </div>
                <h3 className='fw-bold mb-4'>Easy Download</h3>
                <p className='text-center'>EZ Wallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`our-client `}>
        <div className="wrapper container py-5">
        </div>
      </section>
      <section className="money-transfered container py-5 px-4 d-flex flex-column align-items-center">
        <div className={` py-3 px-md-5 px-3 mt-3 rounded-pill`}>
          <p className='fw-bolder fs-1 text-color1 m-0'>Rp. 390.736.500</p>
        </div>
        <h2 className='fw-bolder my-5 fs-1 text-center'>
          <span className='text-color1'>Money</span> has Been Transfered.
        </h2>
        <p>
          That amount of money has been transfered from all users. We still counting and going strong!
        </p>
      </section>
      <section className={`app-show py-5 px-3`}>
        <h2 className='text-center fw-bolder mb-4 mb-md-5 d-lg-none'>All The <span className='text-color1'>Great</span> EZ Wallet Features.</h2>
        <div className="row align-items-center px-lg-5 mt-lg-4">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            {/* <Image src={phoneBanner} quality={75} alt='phone-banner' layout='responsive' /> */}
          </div>
          <div className="col-12 col-md-6">
            <h2 className='fw-bolder mb-4 fs-1 d-none d-lg-block'>All The <span className='text-color1'>Great</span> <br /> EZ Wallet Features.</h2>
            <div className="app-benefit bg-white rounded-3 p-3 p-lg-4">
              <h3 className='fs-5 fw-bold mb-3'><span className='text-color1'>1.</span> Small Fee</h3>
              <p className='m-0'>We only charge 5% of every success transaction done in EZ Wallet app.</p>
            </div>
            <div className="app-benefit bg-white rounded-3 p-3 p-lg-4 mt-3">
              <h3 className='fs-5 fw-bold mb-3'><span className='text-color1'>2.</span> Data Secured</h3>
              <p className='m-0'>All your data is secured properly in our system and it’s encrypted.</p>
            </div>
            <div className="app-benefit bg-white rounded-3 p-3 p-lg-4 mt-3">
              <h3 className='fs-5 fw-bold mb-3'><span className='text-color1'>3.</span> User Friendly</h3>
              <p className='m-0'>EZ Wallet come up with modern and sleek design and not complicated.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="testi bg-semi-white py-5 px-4">
        <h2 className='fw-bolder text-center mb-4'>What Users are <span className='text-color1'>Saying.</span></h2>
        <p className={'text-center'}>We have some great features from the application and it’s totally free to use by all users around the world.</p>

        <div className="row align-items-center justify-content-center">
          <div className="col-1 d-none d-md-block text-end">
            <button className="wrapper py-2 px-2 border-0 rounded btn btn-color1">
              <BsArrowLeft className='text-secondary fs-3' />
            </button>
          </div>
          <div className="col">
            <div className="testi-card px-4 py-5 bg-white rounded-3 d-flex flex-column align-items-center text-center">
              {/* <Image src={testiPlaceholder} alt='testi-pict' width={120} height={120} className='rounded-3' /> */}
              <p className='fw-bold fs-5 my-3'>Alex Hansinburg</p>
              <p className='mb-5'>Designer</p>
              <p >“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
            </div>
          </div>
          <div className="col-1 d-none d-md-block">
            <button className="wrapper py-2 px-2 border-0 rounded btn btn-color1">
              <BsArrowRight className='text-secondary fs-3' />
            </button>
          </div>
        </div>
      </section>
      {/* <EZFooter /> */}
    </>
  );
}