const moveForward = () => {

    //move the main image div to last array position and make the last image 
    //in the array the image in the main div and move the last first image to the tiny image preview


const arrowForward = document.querySelector('.forwardArrow')//get the forward arrow element







arrowForward.addEventListener('click', (event)=>{
    const mainImageDiv = document.querySelector('.mainImageDiv')
    const tinyImagePreview = document.querySelector('.tinyImagepreview')
    

    let tinyImageArray = [...document.querySelectorAll('.tinyImagePreview .randomImage')]


    const datasetArrayNumber = document.querySelector('.mainImageDiv .randomImage').dataset.arrayNumber 
    //get array number stored as dataset arrayNumber of the main image div

    const tinyImageIndex = tinyImageArray.findIndex(element => element.dataset.arrayNumber === datasetArrayNumber)

    if(tinyImageIndex !== 0){ //if image isn't zeroth element in tinyimage array make sure when forward arrow is pressed that next element in array is next in slide show.

      const lastElements = tinyImageArray.splice(tinyImageIndex,tinyImageArray.length)
      tinyImageArray.unshift(...lastElements)
      console.log(lastElements)
    }

   
    
    const lastItem = tinyImageArray.splice(0,1) //grab first element of array
    tinyImageArray.push(lastItem[0])//put lastitem iat the end of tiny image array.

    tinyImagePreview.replaceChildren(...tinyImageArray)

    mainImageDiv.removeChild(document.querySelector('.randomImage'))

    mainImageDiv.appendChild(tinyImageArray[0].cloneNode())
    
    


    

    

    
    
   
})

}


const moveBackward = () => {

    //move the main image div to last array position and make the last image 
    //in the array the image in the main div and move the last first image to the tiny image preview


const arrowBackward = document.querySelector('.backArrow')//get the forward arrow element







arrowBackward.addEventListener('click', ()=>{
    const mainImageDiv = document.querySelector('.mainImageDiv')
    const tinyImagePreview = document.querySelector('.tinyImagepreview')
    

    let tinyImageArray = [...document.querySelectorAll('.tinyImagePreview .randomImage')]

    const datasetArrayNumber = document.querySelector('.mainImageDiv .randomImage').dataset.arrayNumber 
    //get array number stored as dataset arrayNumber of the main image div

    const tinyImageIndex = tinyImageArray.findIndex(element => element.dataset.arrayNumber === datasetArrayNumber)

    if(tinyImageIndex !== 0){ //if image isn't zeroth element in tinyimage array make sure when forward arrow is pressed that next element in array is next in slide show.

      const lastElements = tinyImageArray.splice(tinyImageIndex,tinyImageArray.length)
      tinyImageArray.unshift(...lastElements)
      console.log(lastElements)
    }

    
    const lastItem = tinyImageArray.pop()
    tinyImageArray.unshift(lastItem)

    tinyImagePreview.replaceChildren(...tinyImageArray)

    mainImageDiv.removeChild(document.querySelector('.randomImage'))

    mainImageDiv.appendChild(tinyImageArray[0].cloneNode())
    
    console.log(tinyImageArray)


})

}

const timerForward = () => {

    const mainImageDiv = document.querySelector('.mainImageDiv')
    const tinyImagePreview = document.querySelector('.tinyImagepreview')
    

    let tinyImageArray = [...document.querySelectorAll('.tinyImagePreview .randomImage')]


    const datasetArrayNumber = document.querySelector('.mainImageDiv .randomImage').dataset.arrayNumber 
    //get array number stored as dataset arrayNumber of the main image div

    const tinyImageIndex = tinyImageArray.findIndex(element => element.dataset.arrayNumber === datasetArrayNumber)

    if(tinyImageIndex !== 0){ //if image isn't zeroth element in tinyimage array make sure when forward arrow is pressed that next element in array is next in slide show.

      const lastElements = tinyImageArray.splice(tinyImageIndex,tinyImageArray.length)
      tinyImageArray.unshift(...lastElements)
      console.log(lastElements)
    }

   
    
    const lastItem = tinyImageArray.splice(0,1) //grab first element of array
    tinyImageArray.push(lastItem[0])//put lastitem iat the end of tiny image array.

    tinyImagePreview.replaceChildren(...tinyImageArray)

    mainImageDiv.removeChild(document.querySelector('.randomImage'))

    mainImageDiv.appendChild(tinyImageArray[0].cloneNode())

}



export { moveForward, moveBackward, timerForward }
