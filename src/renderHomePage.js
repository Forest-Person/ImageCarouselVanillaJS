const homePage = () => {

     const homePageHtml = `
     
     <div class 'mainImageContainer'>

        <h1>Image Round-about</h1>


        <div class = 'mainImageDiv'>


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
    
     for(let i = 0; i<5; i++){

        
        let url = `https://source.unsplash.com/random/500*500?sig=${i}`;


 
        let image = document.createElement(`img`)
        image.src = url;
        
        imageArray.push(image)
        console.log(imageArray)
        mainImageDiv.appendChild(imageArray[0]); //only the zeroth image will occupy the main image div.
        

     }

    const restOf = imageArray.slice(1)///append the rest of the images to the tinyImagePreview div which will be below.
    for(let item in restOf){tinyImagePreview.append(restOf[item])}
    
    console.log(restOf)

     

}

export { homePage }