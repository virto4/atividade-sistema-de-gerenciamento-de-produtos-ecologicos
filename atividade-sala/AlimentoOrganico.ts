import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
    dataValidade: Date
    ingredientes: string[]
    nome: string
    preco: number
    constructor(dataValidade: Date, ingredientes: string[], nome: string, preco: number){
        this.dataValidade = dataValidade
        this.ingredientes = ingredientes
        this.nome = nome
        this.preco = preco
    }

    toString():string {
        return "dataValidade: " + this.dataValidade + ", ingredientes: " + this.ingredientes + ", nome: " + this.nome + ", preco: " + this.preco
    }

    getDataValidade():Date {
        return this.dataValidade
    }

    setDataValidade(dataValidade:Date):void {
        this.dataValidade = dataValidade
    }

    getIngredientes():string[] {
        return this.ingredientes
    }

    setIngredientes(ingredintes:string[]):void {
        this.ingredientes = ingredintes
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