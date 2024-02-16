import memeMaker from "@erickwendel/meme-maker"

const options = {
  image: './img/cat-poker-face.jpg',         
  outfile: './img/meme.png',  
  topText: 'FUI FAZER O DELETE E',            
  bottomText: 'ESQUECI O WHERE',          
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));   