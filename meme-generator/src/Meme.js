import React from 'react'
import memesData from './memesData'



export default function Meme() {
  
                                        //the data set before change of state
    const [meme, setMeme] = React.useState({
                                        topText: "",
                                        bottomText: "",
                                        randomImage: "http://i.imgflip.com/1bij.jpg"
                                        })
   
    
    const [allMemesImages, setAllMemesImage] = React.useState(memesData) 

    function getMemeImage() {

        const memesArray = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length) //get a random number
        const url = memesArray[randomNumber].url

        //the new state after the change/ when a button is clicked
        setMeme(prevSetMeme => prevSetMeme ({
                                        ...prevSetMeme,
                                        randomImage: url
                                            }))

        
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
                    onClick={getMemeImage} //add eventListener
                >
                    Get a new meme image 🖼
                </button>
            </div> 
            <img src={meme.randomImage} className="meme--image" alt=''/> 
        </main>
    ) //the image that displays when button is clicked
  
}
  

