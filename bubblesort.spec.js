describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('Bubble Sort toma un arreglo y lo devuelve ordenado', function(){
        expect( bubbleSort([20,18,25,46,1,8]) ).toEqual( [1,8,18,20,25,46] );
      });
    it("deberia tener un número máximo de n^2 pasos", function(){
        spyOn(window, "swap").and.callThrough();
        var arr4 = [4,3,2,1]
        bubbleSort(arr4)
        expect(swap.calls.count()).toBeLessThan(Math.pow(arr4.length, 2)+1)
        expect( bubbleSort([20,18,25,46,1,8]) ).toEqual( [1,8,18,20,25,46] );
      }); 
  });


// describe('Función `saludar`', function() {
//     // La función saludar la tenemos que definir nosotros en nuestro archivo test.js
//     // tiene que poder superar los test planteados a continuación.
//     it('Debería saludar', function() {
//       // En este `spec` o test pedimos que al llamar a la función `saludar`
//       // el resultado sea igual (.toEqual) al string 'Hola!', osea que retorne 'Hola!'.
//       expect(saludar()).toEqual('Hola!');
//     });
  
//     it('Si recibe un parámetro debería saludar a alguien', function() {
//       expect(saludar('Toni')).toEqual("Hola, Toni!");
//     });
//   });
  
//   describe('Función `sumar`', function(){
  
//     var valor = 0;
//     // La función `beforeEach` se llama una vez antes de cada unit test.
//     // Los "unit tests" o "tests" empiezan con la función "it".
//     beforeEach(function(){
//       valor = 0;
//     });
  
//     it('sumando 4 y 5, debería dar 9', function(){
  
//       // También podemos realizar acciones antes de la comparación final
//       valor += sumar(4, 5);
//       expect(valor).toEqual(9);
//     });
  
//     it('sumando 7 y 8, debería dar 15', function(){
      
//       valor += sumar(7, 8);
//       expect(valor).toEqual(15);
//     });
//   })
  