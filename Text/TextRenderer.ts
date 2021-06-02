export default function TextRenderer(layers : Array<any> = [],fontSize : number = 30, beforeDraw : Function = () => {}, afterDraw : Function = () => {}){
    for (let layer of layers) {

        beforeDraw()
        
          let layerElement = document.createElement('div');
          layerElement.classList.add('plx-layer');
          layerElement.style.fontSize = `${fontSize}px`;
          layerElement.style.top = `${layer.position[1] * fontSize}px`;
          layerElement.style.left = `${layer.position[0] * fontSize / 2}px`;
          layerElement.style.height = `${layer.size[1] * fontSize}px`;
          layerElement.style.width = `${layer.size[0] * fontSize / 2}px`;
          layerElement.style.zIndex = layer.zIndex
          document.querySelector('.plx-container').appendChild(layerElement);
       
  
        for (let node of layer.nodes) {

            let nodeElement = document.createElement('div');
            nodeElement.classList.add('plx-node');

          if (node.isShown) {
            nodeElement.innerHTML = node.char.replace(/ /g, '&nbsp;');
            nodeElement.style.color = node.color
            nodeElement.style.backgroundColor = node.bgColor
            nodeElement.style.top = `${node.position[1] * fontSize}px`;
            nodeElement.style.left = `${node.position[0] * fontSize / 4}px`;
            nodeElement.style.display = 'block';
          } else {
            nodeElement.style.display = 'none';
          }
          layerElement.appendChild(nodeElement);
        }

        afterDraw()
        }
    }
