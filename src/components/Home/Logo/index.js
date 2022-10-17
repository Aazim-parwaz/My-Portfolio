import profile from '../../../assets/images/profile.JPG'
import splash from '../../../assets/images/splash.jpg'
import './index.scss'

const Logo = () => {
 

  return (
   <>
   <div className='images-container'>
    <div className='img-box'>
    <img src={profile} alt='my pic' className='myself'/>

    </div>
       <img src={splash} alt='splash' className='splash'/>
       

   </div>
   </>
  )
}

export default Logo
