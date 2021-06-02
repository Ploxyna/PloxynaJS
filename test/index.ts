import TextLayer from "../Text/TextLayer"
import TextNode from "../Text/TextNode"
import TextRenderer from  "../Text/TextRenderer"


let backgroundNodes = []

for (let index = 0; index < 80 * 24; index++) {
    const x = index % 80;
    const y = Math.floor(index / 80)
    const element = TextNode(".", "(225,225,225,1)", "(0,0,0,1)", [x,y])
    backgroundNodes.push(element)
}

let playerNode = TextNode("@", "(225,0,0,1)", "(225,225,225,0)", [0,0])


  document.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp': {
        playerNode.position[1] -= 1
        break;
      }
      case 'ArrowDown': {
        playerNode.position[1] += 1
        break;
      }
      case 'ArrowLeft': {
        playerNode.position[0] -= 1
        break;
      }
      case 'ArrowRight': {
        playerNode.position[0] += 1
        break;
      }
    }
  })  

let alpha = 0

const draw = () => {

let bgBeforeDraw = () => {
  backgroundNodes.forEach((n) => {
    n.color = `rgba(225,225,225,${Math.sin(alpha + n.position[0] + n.position[1])})`
  })
}


let backgroundLayer = TextLayer(1,[0,0],[80, 24], 0, backgroundNodes,"backgroundLayer", true)
let playerLayer = TextLayer(1,[0,0],[80,24],1,[playerNode],"playerLayer",true)
    TextRenderer([backgroundLayer, playerLayer], 30, bgBeforeDraw)


    setTimeout(() => document.querySelectorAll(".plx-layer").forEach(e => e.remove()), 1/120)
    alpha++
    requestAnimationFrame(draw);
  }
  
draw()