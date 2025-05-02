import React from 'react'
import Header from '../components/Header'

function Contactpage() {
  return (
    <div>
        <Header />
        <div>
        <h1 className='description'>Contact Us</h1>
        <p>
        Have feedback, ideas, or just want to say hi?
       We'd love to hear from you. Reach out anytime — your voice matters.
       </p>
       Reach out anytime:
       <li className='Contacts'>
      <ul>📧 Email: naksmariak@gmail.com </ul>
       <ul>📞 Phone: 075-945-698 </ul>

       <ul>📍 Location: We're everywhere—Parle Plaza is digital!</ul>
       </li>
       </div>
    </div>
  )
}

export default Contactpage