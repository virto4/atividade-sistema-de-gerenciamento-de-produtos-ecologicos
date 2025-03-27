import { ProdutoEcologico } from "./ProdutoEcologico"

export class AlimentoOrganico implements ProdutoEcologico{
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

    exibir():string{
        return "AlimentoOrganico: dataValidade: " + this.dataValidade + ", ingredintes: " + this.ingredientes + ", nome: " + this.nome + ", preco: " + this.preco
    }

    setDataValidade(dataValidade:Date): void{
        this.dataValidade = dataValidade
    }
    getdataValidade():Date{
        return this.dataValidade
    }
    setIngredientes(ingredientes:string[]):void{
        this.ingredientes = ingredientes
    }
    getIngredientes():string[]{
        return this.ingredientes
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