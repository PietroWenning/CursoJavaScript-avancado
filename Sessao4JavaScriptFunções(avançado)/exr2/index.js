let carros = [];

  
    const form = document.getElementById("formCarro");
    const tabela = document.getElementById("tabelaCarros").querySelector("tbody");

    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      
      const marca = document.getElementById("marca").value;
      const modelo = document.getElementById("modelo").value;
      const placa = document.getElementById("placa").value;

     
      const carro = { marca, modelo, placa };

      
      carros.push(carro);

      
      atualizarTabela();

      
      form.reset();
    });

    
    function atualizarTabela() {
     
      tabela.innerHTML = "";

      
      carros.forEach((carro, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${carro.marca}</td>
          <td>${carro.modelo}</td>
          <td>${carro.placa}</td>
          <td>
            <button class="delete" onclick="deletarCarro(${index})">Excluir</button>
          </td>
        `;

        tabela.appendChild(row);
      });
    }

   
    function deletarCarro(index) {
      carros.splice(index, 1); 
      atualizarTabela(); 
    }