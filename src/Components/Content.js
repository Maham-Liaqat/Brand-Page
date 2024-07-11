import React from 'react'

export default function Content() {
  return (
    <div className="container itemInfo">
        <div className="d-flex">
            <div className="div1">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <div>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="d-flex btn-div">
                <button class="btn btn1">Shop Now</button>
                <button class="btn btn2">Category</button>
                </div>

                <div className='div2'>
                    <p>Also Available On</p>
                    <div className="d-flex">
                    <img src="/images/flipkart.png" alt="Brand Logo"className="img-fluid"/>
                    <img src="/images/amazon (1).png" alt="Brand Logo" className="img-fluid"/>
                    </div>
                </div>

            </div>
            </div>
            <div className="div3">
              <img src="/images/shoe_image.png" alt="Brand Logo" className="img-fluid"/>
            </div>
        </div>
    </div>
  )
}
