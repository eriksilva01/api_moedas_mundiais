




//http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL 
 function atualizar () {

     fetch(`http://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL`).then(response => {
         return response.json();
     }).then(result=>{
         console.log(result)
        
            const resultadoBitcoin = parseFloat(result.BTCBRL.ask).toFixed(2);
            const resultadoDolar = parseFloat(result.USDBRL.ask).toFixed(2);
            const resultadoEuro = parseFloat(result.EURBRL.ask).toFixed(2);
            const resultadoLibra= parseFloat(result.GBPBRL.ask).toFixed(2);
         
         const bitcoin =  document.getElementById('bitcoin').innerHTML = resultadoBitcoin;
         const dolar = document.getElementById('dolar').innerHTML = resultadoDolar;
         const euro = document.getElementById('euro').innerHTML =  resultadoEuro;
         const libra = document.getElementById('libra').innerHTML = resultadoLibra;
       
          
         

             

        
     }) 
 }
