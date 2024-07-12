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
                <button className="btn btn1">Shop Now</button>
                <button className="btn btn2">Category</button>
                </div>

                <div className='div2'>
                    <p>Also Available On</p>
                    <div className="d-flex">
                    <img src={`${process.env.PUBLIC_URL}/images/flipkart.png`} alt="Flipkart Logo" className="img-fluid"/>
                    <img src={`${process.env.PUBLIC_URL}/images/amazon (1).png`} alt="Amazon Logo" className="img-fluid"/>
                    </div>
                </div>

            </div>
            </div>
            <div className="div3">
            <img src={`${process.env.PUBLIC_URL}/images/shoe_image.png`} alt="Shoe Image" className="img-fluid"/>
            </div>
        </div>
    </div>
  )
}
