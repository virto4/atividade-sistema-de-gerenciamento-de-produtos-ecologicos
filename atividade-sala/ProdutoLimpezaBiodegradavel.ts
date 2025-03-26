import { ProdutoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    volume: number
    nome: string
    preco: number
    constructor(volume: number, nome: string, preco: number){
        this.volume = volume
        this.nome = nome
        this.preco = preco
    }

    toString():string {
        return "volume: " + this.volume + ", nome: " + this.nome + ", preco: " + this.preco
    }

    getVolume():number {
        return this.volume
    }

    getPreco():number {
        return this.preco
    }

    setPreco(preco:number):void {
        this.preco = preco
    }

    getNome():string {
        return this.nome
    }

    setNome(nome:string):void {
        this.nome = nome
    }
}