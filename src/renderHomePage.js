import arrowBackwards from './images/arrowBack.png'
import arrowForwards from './images/arrowForward.png'

import { moveForward } from './ImageSlide'


const homePage = () => {

    const userPrompt = prompt("How many images would you like loaded?")

     const homePageHtml = `
     
     <div class 'mainImageContainer'>

        <h1>Image Round-about</h1>


        <div class = 'mainImageDiv'>

            <img class = 'backArrow'  src = ${arrowBackwards} />

            
            <img class = 'forwardArrow' src = ${arrowForwards} /> 


            </div>

        
        
        <div class = 'tinyImagePreview'>
            

            </div>


     </div>
     
     
     
     `

// <img src = 'https://source.unsplash.com/random/500*500'
     const content = document.querySelector('#content')
     
     content.insertAdjacentHTML('afterbegin', homePageHtml)


     const mainImageDiv = document.querySelector('.mainImageDiv')
     const tinyImagePreview = document.querySelector('.tinyImagePreview')
    const imageArray = [] //image array that stores the images we will be showing in the main image div.
    
     for(let i = 0; i<userPrompt; i++){ //for loop that uses sig on url with index name being i from for loop. Also dataset names are set by the i as well on each loop

        
        let url = `https://source.unsplash.com/random/500*500?sig=${i}`;


 
        let image = document.createElement(`img`)
        image.dataset.arrayNumber = i
        image.src = url;
        image.classList.add('randomImage')
        
        imageArray.push(image)
        
        
        mainImageDiv.appendChild(imageArray[0]); //only the zeroth image will occupy the main image div.
        

     }

    const restOf = imageArray.slice(1)///append the rest of the images to the tinyImagePreview div which will be below.
    for(let item in restOf){tinyImagePreview.append(restOf[item])}
    
   

    mainImageDiv.addEventListener('mouseenter', ()=>{ //two following event listeners make the back or forward arrow visible when mouse enters or leaves mainimagediv

        
        document.querySelector('.backArrow').style.visibility = 'visible'
        document.querySelector('.forwardArrow').style.visibility = 'visible'

    })

    mainImageDiv.addEventListener('mouseleave', () => {

        document.querySelector('.backArrow').style.visibility = 'hidden'
        document.querySelector('.forwardArrow').style.visibility = 'hidden'

    })

   const tinyImage = document.querySelectorAll('.tinyImagePreview img')

    tinyImage.forEach((item)=>{item.addEventListener('mouseenter',(event) => {

       event.target.style.border = '2px solid blue'
    
    })})

    tinyImage.forEach((item)=>{item.addEventListener('mouseleave',(event) => {

        event.target.style.border = 'none'
    
    })})


moveForward()    
 
    
     

}

export { homePage }