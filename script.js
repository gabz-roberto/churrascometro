function seNaoBebem() {
  const seBebem = document.getElementById("seBebem").value;
  const seNao = document.getElementById("seNao");

  if (seBebem === "no") {
    seNao.style.display = "block";
  } else {
    seNao.style.display = "none";
  }
}

function verificarPessoas() {
  let qtdPessoasTotal = parseInt(document.getElementById("qtd_pessoas").value);
  let qtdPessoasCerveja = parseInt(document.getElementById("seNao").value);

  if (qtdPessoasCerveja > qtdPessoasTotal) {
    alert("Número de pessoas que bebem maior que o número total.");
    document.getElementById("qtd_pessoas").value = "";
    document.getElementById("seNao").value = "";
    return
  }
}

function carnePorPessoa() {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPorPessoa() {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPorPessoa() {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

let resultado = document.getElementById('resultado')

function calcular() {

  let qtdPessoasTotal = parseInt(document.getElementById("qtd_pessoas").value);
  let qtdPessoasCerveja = parseInt(document.getElementById("seNao").value);
  let qtdCriancas = parseInt(document.getElementById("qtd_criancas").value);
  let duracao = parseInt(document.getElementById("duracao").value);
  const seBebem = document.getElementById("seBebem").value;

    let qtdBebemCerveja
    if(seBebem === 'no') {
        qtdBebemCerveja = qtdPessoasCerveja
    } else {
        qtdBebemCerveja = qtdPessoasTotal
    }

    let totalCarne = (qtdPessoasTotal * carnePorPessoa(duracao)) + (qtdCriancas * carnePorPessoa(duracao) / 2)

    let totalCerveja = (qtdBebemCerveja * cervejaPorPessoa(duracao))

    let totalBebidas = (qtdPessoasTotal * bebidaPorPessoa(duracao)) + (qtdCriancas * bebidaPorPessoa(duracao) / 2)

    console.log(totalCarne, totalCerveja)

    resultado.innerHTML = `<p>Total de Carne: ${totalCarne / 1000} Kg.</p>`
    resultado.innerHTML += `<p>Total de Cerveja: ${Math.ceil(totalCerveja / 355)} Latas.</p>`
    resultado.innerHTML += `<p>Total de Bebidas: ${totalBebidas / 1000} L.</p>`
}

function funcoes() {
  verificarPessoas();
  calcular();
}
