/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import Image from "next/image"; 

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
  
        <div>
          <div className='flex flex-col justify-center items-center my-10'>
            <Image className=' ' src="/Footer/image.png" width={90} height={90} alt="Picture of the author"/>
            <h1 className='text-cyan-600 text-4xl font-bold'>About us</h1>
            <h1 className='text-2xl font-bold my-10'>Project for PRINCIPLES OF SOFTWARE DEVELOPMENT PROCESS</h1>
            <h1 className='text-xl'>เป็นเว็บไซต์ท่องเที่ยวที่รวบรวมแหล่งท่องเที่ยวท้องถิ่นจังหวัดตาก</h1>
            <h1 className='text-xl'>ซึ่งอยู่ในภาคตะวันตกของประเทศไทยเพื่อส่งเสริมและสนับสนุนให้ท่องเที่ยวในชุมชนและ</h1>
            <h1 className='text-xl'>สินค้าผลิตภัณฑ์(OTOP)ของจังหวัดตากให้เจริญรุ่งเรืองขึ้นโดยโครงการนี้เน้นในการสร้าง</h1>
            <h1 className='text-xl'>สัมพันธ์กับชุมชนและการกระจายรายได้กลับสู่ท้องถิ่นและตั้งใจเสริมสร้างเศรษฐกิจในพื้นที่</h1>
            <h1 className='text-xl'>ที่ยังคงความเป็นอยู่ของประชาชนในพื้นที่เหล่านั้น</h1>
          </div>
          <h1 className='text-cyan-700 text-center text-6xl font-bold'>TravelerTale</h1>

          <div className='flex flex-row justify-around items-end mt-10  w-full h-[700px] bg-footer-bg bg-center'>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>TravelerTale</h1>
              <h1 className='text-sm'>
                นักศึกษาคณะวิศวกรรมศาสตร์ <br></br>
                ภาควิชาวิศวกรรมคอมพิวเตอร์ ปี 3<br></br>
                สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h1>
            </div>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>Company</h1>
              <h1 className='text-sm'>
                KMITL <br></br>
                CE<br></br>
                3D</h1>
            </div>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>Contact</h1>
              <h1 className='text-sm'>
                +00 XX XXX XXXXX <br></br>
                +00 XX XXX XXXXX <br></br>
                +00 XX XXX XXXXX</h1>
            </div>

            <div className='text-black flex flex-col justify-center items-start my-6'>
              <h1 className='text-xl font-bold'>Meet Us</h1>
              <h1 className='text-sm'>
                ตึก ECC Khwaeng Lam Prathew,  <br></br>
                Khet Lat Krabang,<br></br>
                Krung Thep Maha Nakhon 10520
                </h1>
            </div>

          </div>
        </div>

    );
  } 
}

export default Footer;