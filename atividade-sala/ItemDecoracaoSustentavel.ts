import { ProdutoEcologico } from "./ProdutoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    material: string
    dimensoes: {largura: number
                altura: number
                profundidade: number
    }
    nome: string
    preco: number
    constructor(material: string, dimensoes:{largura: number, altura: number, profundidade: number}, nome: string, preco: number){
        this.dimensoes = dimensoes
        this.material = material
        this.nome = nome
        this.preco = preco
    }

    exibir():string{
        return "ItemDecoracaoSustentavel: material: " + this.material + ", dimensoes: {" + this.dimensoes.altura + ", " + this.dimensoes.largura + ", " + this.dimensoes.profundidade + "} , nome: " + this.nome + ", preco: " + this.preco
    }

    setMaterial(material:string){
        this.material=material
    }
    getMaterial():string{
        return this.material
    }
    setDimensoes(dimensoes:{largura: number, altura: number, profundidade: number}):void{
        this.dimensoes=dimensoes
    }
    getDimensoes():{largura: number, altura: number, profundidade: number}{
        return this.dimensoes
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