import React from 'react'
import'./footer.css'
import youtube_icon from'../../assets/youtube_icon.png'
import twitter_icon from'../../assets/twitter_icon.png'
import instagram_icon from'../../assets/instagram_icon.png'
import facebook_icon from'../../assets/facebook_icon.png'
const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Card</li>
      <li>Madia Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Tarms of Use</li>
      <li>privacy</li>
      <li>Cookie proference</li>
      <li>corporate Information</li>
      <li>Contact Us</li>
      </ul>
      <p className='copyrigyt-text'>
      &copy;1997-2023 Netflix,Inc.
      </p>
    </div>
  )
}

export default footer
