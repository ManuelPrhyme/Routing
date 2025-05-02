 import Logo from '../assets/Logo.png'
 import { useNavigate } from 'react-router-dom'


 export default function Header(){
        const Navigate = useNavigate() 
    return (
        <div>
            <button onClick={()=>{Navigate('/')}}>Home</button>
            <button onClick={()=>{Navigate('/gallery')}}>Gallery</button>
            <button onClick={()=>{Navigate('/about')}}>About</button>
            <button onClick={()=>{Navigate('/contact')}}>Contact</button>
           <h3 className="description">
             <marquee behavior="scroll" direction="left" scrollamount="5">
             "Connecting Cultures, One Word at a Time ...ParlePlaza"
             </marquee>
           </h3>         
        </div>
    )
} 

export function Component2 (){ 

    return (
        <>
         
         <img src={Logo} alt="" />
        </>

    )
}










// const Header = ()=>{

// }
