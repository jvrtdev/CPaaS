/*const appCep = new Vue({
    el: '#appCep',
    data: {
      endereco: {
        cep: '',
        logradouro: '',
        numero: '',
        estado: '',
        cidade: '',
      },
    },
    methods: {
        
cepAlteradoEvento() {
        const cep = this.endereco.cep.replace('-', '');
        if (cep.length === 8) {
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
              this.endereco.logradouro = data.logradouro;
              this.endereco.estado = data.uf;
              this.endereco.cidade = data.localidade;
            })
            .catch(error => {
              console.error('Erro ao buscar o CEP:', error);
            });
        }
      },
    },
  
});*/
function mascaraCEP(){
  var cep = document.getElementById('cep');

  cep.addEventListener('keypress', () => {
      let cepLength = cep.value.length;
      
      if (cepLength === 5){
          cep.value += '-';
      }
  })
}



function ProcuraCEP() {
  var cep = document.getElementById("cep").value.replace("-","");
  
  if(cep !== ''){
      let url = 'https://brasilapi.com.br/api/cep/v1/' + cep;
      let req = new XMLHttpRequest();
      req.open("GET", url);
      req.send();

      req.onload = function() {
          if(req.status === 200) {
              let endereco = JSON.parse(req.response)
              document.getElementById('logradouro').value = endereco.street
              document.getElementById('cidade').value = endereco.city
              document.getElementById('estado').value = endereco.neighborhood
              document.getElementbyId('')
          }
          else if(req.status === 404){
              toast("CEP INVÁLIDO");
              document.getElementById("cep").value = "";
          }
      }   
  }
}

window.onload = function() {
  let textcep = document.getElementById('cep');
  textcep.addEventListener("blur", ProcuraCEP);
}