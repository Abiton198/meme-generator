import React from 'react'
import memesData from './memesData'



export default function Meme() {
  
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    console.log(memesData.data)
    function getMemeImage() {

        const memesArray = memesData.data.memes

        const randomNumber = Math.floor(Math.random() * memesArray.length) //get a random number
        setMemeImage(memesArray[randomNumber].url)//url random image from data
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image" alt=''/>
        </main>
    )
  
}
  

