import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico {
    material: string
    dimensoes: {largura: number
                altura: number
                profundidade: number
    }
    nome: string
    preco: number
    constructor(material: string, dimensoes: {largura: number, altura: number, profundidade: number},nome: string, preco: number){
        this.dimensoes = dimensoes
        this.material = material
        this.nome = nome
        this.preco = preco
    }

    toString():string {
        return "dimensoes: " + this.dimensoes + ", material: " + this.material +", nome: " + this.nome + ", preco: " + this.preco
    }

    getMaterial():string {
        return this.material
    }

    setMaterial(material:string):void{
        this.material = material
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