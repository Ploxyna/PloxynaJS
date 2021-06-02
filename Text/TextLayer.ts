export default function TextLayer(opacity : number = 1, position : Array<number> = [0,0], size : Array<number> = [0,0], zIndex: number = 0, nodes : Array<any>,name:string = "layer", isShown:Boolean = true){
 return {
     opacity,
     position,
     size,
     zIndex,
     nodes,
     name,
     isShown
 }
}