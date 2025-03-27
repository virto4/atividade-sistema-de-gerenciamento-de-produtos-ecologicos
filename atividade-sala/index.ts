import { AlimentoOrganico } from "./AlimentoOrganico"
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel"
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel"

console.log("instanciando objetos")
let soja = new AlimentoOrganico(new Date(1963, 10, 22), ["soja", "amido"], "soja", 19.99)
let omo = new ProdutoLimpezaBiodegradavel(20, "omo", 9.99)
let decalque = new ItemDecoracaoSustentavel("madeira", {largura: 20, altura: 2, profundidade: 54}, "decalque de palmeira", 55)
console.log("objetos criados!")
console.log(soja.exibir() + "\n" + omo.exibir() + "\n" + decalque.exibir())
console.log("alterando coisas")
omo.setVolume(49)
soja.setIngredientes(["soja", "amido", "proteína", "emulsificante"])
console.log(soja.exibir() + "\n" + omo.exibir() + "\n" + decalque.exibir())