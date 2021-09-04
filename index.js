import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
console.log(cliente1);

const conta1 = new ContaCorrente(1001, cliente1);
console.log(conta1);

conta1.depositar(500);
console.log(conta1.saldo);

conta1.sacar(100);
console.log(conta1.saldo);

const cliente2 = new Cliente("Alice", 88822233309);
console.log(cliente2);
const conta2 = new ContaCorrente(1002, cliente2);
console.log(conta2);

let valor = 150;
conta1.transferir(valor, conta2);

console.log(conta2.saldo);
console.log(conta1.saldo);

console.log(ContaCorrente.numeroDeContas)
