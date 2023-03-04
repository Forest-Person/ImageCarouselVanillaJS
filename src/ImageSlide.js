const moveForward = () => {

    //move the main image div to last array position and make the last image 
    //in the array the image in the main div and move the last first image to the tiny image preview


const arrowForward = document.querySelector('.forwardArrow')//get the forward arrow element







arrowForward.addEventListener('click', ()=>{
    const mainImageDiv = document.querySelector('.mainImageDiv')
    const tinyImagePreview = document.querySelector('.tinyImagepreview')
    

    let tinyImageArray = [...document.querySelectorAll('.tinyImagePreview .randomImage')]

    
    const lastItem = tinyImageArray.pop()
    tinyImageArray.unshift(lastItem)

    tinyImagePreview.replaceChildren(...tinyImageArray)

    mainImageDiv.removeChild(document.querySelector('.randomImage'))

    mainImageDiv.appendChild(tinyImageArray[0].cloneNode())
    
    console.log(tinyImageArray)


    

    

    
    
   
})

}

export { moveForward }