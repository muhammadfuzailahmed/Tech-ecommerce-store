import React from 'react'
import Aboutimg from '../../assets/Aboutimg.jpg'

function About() {
  return (
    <div>
        <div className='pt-32 pb-8 md:px-40 md:flex items-center justify-between'>
            <div>
                <p className='md:w-[600px] w-[90vw] m-auto text-justify'>Welcome to our tech e-commerce store, where innovation meets convenience. We offer a wide selection of products tailored for both gaming enthusiasts and professionals. Whether you're looking for the latest in gaming accessories like RGB keyboards, gaming mice, and headphones, or need high-quality professional items such as desks, laptop bags, and wireless chargers, we have everything to elevate your setup. Our store brings together a combination of performance and style, ensuring that each product meets your specific needs for work or play. With user-friendly navigation and detailed product descriptions, you can easily browse through our curated collection.</p>
                <p className='md:w-[600px] w-[90vw] m-auto text-justify mt-3'>Our goal is to provide an exceptional shopping experience, offering top-tier products at competitive prices. Each item in our catalog, from the gaming essentials to professional-grade accessories, is handpicked to deliver the best quality and performance. We strive to keep our site updated with the latest tech, so you always have access to the newest and most innovative products. While we currently have a feature where you can add items to your cart with ease, we're working hard to ensure a smoother checkout process, including fixing the "Add to Cart" feature for a more reliable shopping experience. Enjoy your shopping, and let us help you enhance your tech setup!</p>
            </div>
            <div>
                <img className='md:w-[400px] w-[95vw] m-auto md:mt-0 mt-5 rounded-md' src={Aboutimg} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default About