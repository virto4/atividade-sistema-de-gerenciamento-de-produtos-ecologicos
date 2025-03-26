export interface ProdutoEcologico {
    nome: string
    preco: number

    getPreco():number

    setPreco(preco:number):void

    getNome():string

    setNome(nome:string):void
}