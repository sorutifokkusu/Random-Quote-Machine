/*
import React 
import ReactDOM 
The project is made in codepen.io
*/

class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      quote:"",
      author:""
    }
    //binding
    this.getQuote = this.getQuote.bind(this)
    this.colorCh = this.colorCh.bind(this)
  }
  
  // selector creater 0-4 rand int
  // all = outside div
  // first removes all classes so that there is no need to match
  // later adds a class with color animation
  
  
  colorCh(){
    const selector = Math.floor(Math.random()*6)
    const all = document.getElementById("body")
    const purple85= "#d7b3ff"
    const pink85="#ffb3ec"
    const green85="#b3ffe6"
    const blue85="#b3d9ff"
    const red85="#ffb3b3"
    const t85="#b3ffff"
    this.getQuote()
    void all.offsetWidth
    switch(selector){
      case 0: return (all.animate([{backgroundColor:all.style.backgroundColor},{backgroundColor:purple85}],{duration:2000,fill:"forwards"}))
      case 1: return (all.animate([{backgroundColor:all.style.backgroundColor},{backgroundColor:pink85}],{duration:2000,fill:"forwards"}))
      case 2: return (all.animate([{backgroundColor:all.style.backgroundColor},{backgroundColor:green85}],{duration:2000,fill:"forwards"}))
      case 3: return (all.animate([{backgroundColor:all.style.backgroundColor},{backgroundColor:blue85}],{duration:2000,fill:"forwards"}))
      case 4: return (all.animate([{backgroundColor:all.style.backgroundColor},{backgroundColor:red85}],{duration:2000,fill:"forwards"}))
      case 5: return (all.animate([{backgroundColor:all.style.backgroundColor},{backgroundColor:t85}],{duration:2000,fill:"forwards"}))
    }
  }
  

  
  // async func get quote data from quotable.io/random + setting state
  // also uses colorCh() to change colour and uses classList add/remove
  // to make the animation. element.offsetWidth makes sure soo it redraws
 async getQuote(){
    const box = document.getElementById("box")
    const all = document.getElementById("body")
    const bt = document.getElementById("new-quote")
    
    bt.animate([{textColor:bt.style.textColor},{textColor:all.style.backgroundColor}],{duration:2000,fill:"forwards"})
    box.animate([{opacity:"100%"},{opacity:"0%"}],{duration:0,fill:"forwards"})
    void box.offsetWidth


    const response = await axios.get("https://api.quotable.io/random")
    box.animate([{opacity:"100%"},{opacity:"0%"}],{duration:0,fill:"forwards"})
    void box.offsetWidth
    box.animate([{opacity:"0%"},{opacity:"100%"}],{duration:1500,fill:"forwards"})
  
   this.setState({quote:response.data.content,author:response.data.author})
  }
    
    

    
  
  // Start with random quote
  componentDidMount(){  
    this.getQuote()
  }
  
  
  //Tweety button has an error
  render(){
    //Var for quotes
    const quote = this.state.quote
    const author = this.state.author
    
    let tweet = "https://twitter.com/intent/tweet?"+"text="+'"'+ encodeURIComponent(quote)+'"'+ encodeURIComponent(author)

    return(
      <div id="all">
        <div id="quote-box" class="position-absolute top-50 start-50 translate-middle">
          <h3 class="text-center pb-4">Random Quote</h3>
          <div id="box" class="rounded ">
            <div class="container-fluid">
            <p id="text" class="px-4 pt-4 text-start">"{quote}"</p>
            <p id="author" class="mx-5 text-end">{author}</p>
              </div>
          
            
            <button id="new-quote" class="btn btn-light mx-4 my-3 text-end" type="button" onClick={this.colorCh}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 3c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H6.455L2 22.5V4c0-.552.448-1 1-1h18zm-1 2H4v13.385L5.763 17H20V5zm-9.485 2.412l.447.688c-1.668.903-1.639 2.352-1.639 2.664.155-.02.318-.024.48-.009.902.084 1.613.825 1.613 1.745 0 .966-.784 1.75-1.75 1.75-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093zm5 0l.447.688c-1.668.903-1.639 2.352-1.639 2.664.155-.02.318-.024.48-.009.902.084 1.613.825 1.613 1.745 0 .966-.784 1.75-1.75 1.75-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093z"/></svg> Random Quote</button>
             
               
            <a href={tweet} target="_top" id="tweet-quote" class="btn btn-light mx-4 my-3" data-text={quote+author}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg> Tweet</a>
           
             
  
            
            
            
            </div>
        </div>  
        </div>
      
    )
  }
}


//Render

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)


/*
This is for freecodecamp project

// Stuff I've used //

React, Bootstrap, Axios, Babel
Icon (Remix Icon) =>  https://remixicon.com/
Also the api => https://github.com/lukePeavey/quotable   ///  https://api.quotable.io/random

*/
