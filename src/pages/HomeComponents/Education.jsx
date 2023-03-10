import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Education = () => {

    const sekolah = [
        {judul: 'Elementary School', nama: 'SD Kartini 1 Batam', image: 'https://foto.data.kemdikbud.go.id/getImage/11001707/3.jpg'},
        {judul: 'Junior Highschool', nama: 'SMPIT Ulil Albab Batam', image: 'https://www.ulilalbab-batam.com/wp-content/uploads/2021/05/M3-1024x570.jpg'},
        {judul: 'Highschool', nama: 'SMA Negeri 1 Batam', image: 'https://fastly.4sqi.net/img/general/600x600/8112298_V68j7n1tWhfDPUMtrWq8DZMqS3HavD9zM-jcPc2C58M.jpg'},
        {judul: 'University', nama: 'Universitas Jember', image: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/universitas-jember.jpg'}
    ]

  return (
    <div className='bg-[#fffffe] py-5'>
        <h1 className='flex text-2xl font-bold justify-center'>EDUCATION</h1>
        <div className='flex gap-2 flex-wrap justify-center flex-none pt-10'>
            {sekolah.map((item) => 
                <Card sx={{ maxWidth: 345 }} style={{backgroundColor: '#0f0e17', width:'200px'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.image}
                            alt={item.judul}
                            style={{padding:'5px', height:'140px',}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color='#fffffe'>
                                {item.nama}
                            </Typography>
                            <Typography variant="body2" color="#a7a9be">
                                {item.judul}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
        </div>
    </div>
  )
}

export default Education