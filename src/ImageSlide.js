const moveForward = () => {

    //move the main image div to last array position and make the last image 
    //in the array the image in the main div and move the last first image to the tiny image preview


const arrowForward = document.querySelector('.forwardArrow')







arrowForward.addEventListener('click', ()=>{
   
    let mainImageDiv = document.querySelector('.mainImageDiv')
    let mainImage = document.querySelector('.mainImageDiv .randomImage')
    const tinyImageAppend = mainImage.cloneNode()
    let tinyImagePreview = document.querySelector('.tinyImagePreview')
    tinyImagePreview.appendChild(mainImage)
    let tinyImageArray = document.querySelectorAll('.tinyImagePreview .randomImage')
    let imageArray = Array.from(tinyImageArray)
    mainImageDiv.appendChild(imageArray[0])
    
   
})

}

export { moveForward }