import React from 'react'

const Experience = () => {
    const pengalaman = [
        {no: '1', pengalaman: 'aaaaaa', tanggal: '111'},
        {no: '2', pengalaman: 'b', tanggal: '222'},
        {no: '3', pengalaman: 'c', tanggal: '333'},
        {no: '4', pengalaman: 'd', tanggal: '444'}
    ]

    return (
        <div className='bg-[#0f0e17] mt-5 py-12'>
            <h2 className='text-2xl font-bold flex justify-center text-[#fffffe]'>PAST EXPERIENCES</h2>
            <div className='pt-10'>
                {pengalaman.map((item) =>
                    <div className='grid grid-cols-5 px-5 text-[#fffffe]'>   
                        <p>{item.no}</p>
                        <p className='col-span-2'>{item.pengalaman}</p>
                        <p className='col-span-2'>{item.tanggal}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experience