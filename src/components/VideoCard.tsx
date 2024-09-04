import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
    return (
        <div>
            <Image className='rounded-3xl' src="/Youtube_clone_img1.jpeg" width={700} height={400} alt="thumbnail" />
            <div className='grid grid-cols-12'>
                <div className='col-span-1'>
                    <Image className='rounded-3xl h-5' src="/Youtube_clone_img1.jpeg" width={50} height={50} alt="thumbnail" />
                </div>
                <div className='col-span-11'>
                    <p>(Hindi): Fighter part one</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard