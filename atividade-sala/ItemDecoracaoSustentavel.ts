import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico {
    material: string
    dimensoes: {largura: number
                altura: number
                profundidade: number
    }
    nome: string
    preco: number
    constructor(material: string, largura: number, altura: number, profunidade: number, nome: string, preco: number){
        this.dimensoes.altura = altura
        this.dimensoes.largura = largura
        this.dimensoes.profundidade = profunidade
        this.material = material
        this.nome = nome
        this.preco = preco
    }
}