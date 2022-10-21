let muted:boolean=true
muted=false

console.log("hello, typescript")


//Numeros

let numerador:number=42
let denominador:number=6
let resultado=numerador/denominador


//string

let nombre:string="richard"

//arreglos

let people:string[]=[]

people=["nicol","isabel"]

//people.push(9000)

let others:Array<string|number>=[]

others.push(900)


//Enum

enum Color{
    Rojos="Rojo",
    Verdes="Verde",
    Azul="Azul"
}

let colorFavorito:Color=Color.Rojo

//Any

let comodin:any="joker"
comodin={type:"wilcard"}

//objetc

let comodins:object={type:"wilcard"}
