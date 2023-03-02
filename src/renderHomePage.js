const homePage = () => {

     const homePageHtml = `
     
     <div class 'mainImageContainer'>

        <h1>Image Round-about</h1>






     </div>
     
     
     
     `


     const content = document.querySelector('#content')

     content.insertAdjacentHTML('afterbegin', homePageHtml)




}

export { homePage }