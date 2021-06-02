export default function TextNode(char : string = " ", color: string = "(225, 225, 225, 1)", bgColor : string = "(0, 0, 0, 1)", position : Array<number> = [0,0], isShown : boolean = true){
 return {
     char,
     color : `rgba${color}`,
     bgColor : `rgba${bgColor}`,
     position,
     isShown
 }
}