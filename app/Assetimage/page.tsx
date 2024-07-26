'use client';
import Blueprint from '@/public/images/Bluerints.png';
import CLR from '@/public/images/CLR.png';
import JDM from '@/public/images/JDM.png';
import Image from 'next/image';


const AssetImages = () => {
    return (
        <div className='flex-auto p-2'>
            <Image src={JDM} alt="jdm" className='rounded-3xl p-2 m-2' />
            <Image src={CLR} alt="CLR" className='rounded-3xl p-2 m-2' />
            <Image src={Blueprint} alt="Blueprint" className='rounded-3xl p-2 m-2' />
            <Image src="https://bit.ly/react-cover" alt='image' className='rounded-3xl p-2 m-2' width={2500} height={150} style={{ objectFit: 'contain' }}
                // sizes=''
                quality={90} priority
            />
        </div>
    )
}

export default AssetImages