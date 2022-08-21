import React from 'react'

export default function Meme() {
    const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
    })
   
    //using async func inside a useEffect func
    const [allMemes, setAllMemes] = React.useState([]) 
    React.useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])


    //this func is to get the image display 
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length) 
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
        }))
    }
    //function for handling top and bottom text in relation to the image
    function handleChange(event){
        const{name, value} = event.target
        setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
        }))
       
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name='bottomText'
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage} //add eventListener
                >
                    Get a new meme image 🖼
                </button>
            </div> 
            <div className='meme'>
                    <img src={meme.randomImage} className="meme--image" alt=''/> 
                    <h2 className='meme--top' > {meme.topText} </h2>
                    <h2 className='meme--bottom' > {meme.bottomText} </h2>
            </div>
           
        </main>//the image that displays when button is clicked
    //text displays as typed
    ) 
  
}
  
/*====NOTES===

 use the useEffect to fetch data outside the boundaries of React
[] = dependencies/ no dependencies needed
//making the text appear and linked to the image
//the state that stores data fetched from API
//the new state after the change/ when a button is clicked
//get a random number

*/
 /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen above:
    */