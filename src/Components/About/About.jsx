import React from 'react'
import Aboutimg from '../../assets/Aboutimg.jpg'

function About() {
  return (
    <div>
        <div className='pt-32 pb-8 md:px-40 md:flex items-center justify-between'>
            <div>
                <p className='md:w-[600px] w-[90vw] m-auto text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel accusamus harum nostrum saepe rem dolorum ducimus labore facilis id neque quasi amet nesciunt minus impedit delectus veniam, esse cumque assumenda quas consequatur dicta! Enim delectus, labore optio nostrum quos ducimus voluptates eum temporibus nisi, corrupti illum impedit est ullam nesciunt laborum necessitatibus magni ipsa possimus, ipsam magnam reiciendis hic alias fuga sequi. Tempore at repellat omnis atque vel, recusandae animi molestias nobis aliquam. Exercitationem, obcaecati. Tempora magnam fugiat sapiente amet necessitatibus sit quae rem sequi, enim quisquam harum exercitationem repellat, placeat adipisci voluptate laboriosam sunt dicta quam dolorem!</p>
            </div>
            <div>
                <img className='md:w-[400px] w-[95vw] m-auto md:mt-0 mt-5 rounded-md' src={Aboutimg} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default About