import React from 'react'

export default function Meme() {
  
                                        //the data set before change of state
    const [meme, setMeme] = React.useState({
                                        topText: "",
                                        bottomText: "",
                                        randomImage: "http://i.imgflip.com/1bij.jpg"
                                        })
   
    
    const [allMemes, setAllMemes] = React.useState([]) 

    //use the useEffect to fetch data outside the boundaries of React
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])
//[] = dependencies/ no dependencies needed

    //this func is to get the image display 
    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length) //get a random number
        const url = allMemes[randomNumber].url

        //the new state after the change/ when a button is clicked
        setMeme(prevSetMeme => prevSetMeme ({
                                        ...prevSetMeme,
                                        randomImage: url
                                            }))
    }
    //function for handling top and bottom text in relation to the image
    function handleChange(event){
        const[name, value] = event.target
//making the text appear and linked to the image
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
            <img src={meme.randomImage} className="meme--image" alt=''/> 
            <h2 className='top-text'>{meme.topText}</h2>
            <h2 className='bottom-text'>{meme.bottomText}</h2>
        </main>
    ) //the image that displays when button is clicked
    //text displays as typed
  
}
  

