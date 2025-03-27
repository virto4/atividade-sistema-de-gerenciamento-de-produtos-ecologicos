import { ProdutoEcologico } from "./ProdutoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    volume: number
    nome: string
    preco: number
    constructor(volume: number, nome: string, preco: number){
        this.volume = volume
        this.nome = nome
        this.preco = preco
    }

    exibir():string{
        return "ProdutoLimpezaBiodegradavel: volume: " + this.volume + ", nome: " + this.nome + ", preco: " + this.preco
    }

    setVolume(volume:number):void{
        this.volume = volume
    }
    getVolume():number{
        return this.volume
    }
    setNome(nome:string):void{
        this.nome=nome
    }
    getNome():string{
        return this.nome
    }
    setPreco(preco:number):void{
        this.preco = preco
    }
    getPreco():number{
        return this.preco
    }
}