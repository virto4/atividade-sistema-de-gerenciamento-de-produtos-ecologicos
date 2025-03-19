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
}