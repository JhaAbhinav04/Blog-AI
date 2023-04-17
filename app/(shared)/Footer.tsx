import React from 'react'

type Props = {}

const Footer = () => {
  return (
      <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
          <div className='justify-between mx-auto gap-16 sm:flex'>
              {/* First Column */}
              <div className='mt-16 basis-1/2 sm:mt-0'>
                  <h4 className='font-bold'>BLOGS OF THE FUTURE</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime hic quos nostrum placeat unde.</p>
                  <p>Blogs from the future All Rights Reserved.</p>
              </div>

              {/* Second Column */}
              <div className='mt-16 basis-1/4 sm:mt-0'>
                  <h4 className='font-bold'>Links</h4>
                  <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className='my-5'>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem, ipsum dolor.</p>
              </div>

              {/* Third Column */}
              <div className='mt-16 basis-1/4 sm:mt-0'>
                  <h4 className='font-bold'>Contact Us</h4>
                  <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p>011-111</p>
              </div>
          </div>
    </footer>
  )
}

export default Footer