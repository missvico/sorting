describe('Merge Sort', function(){
    it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
    });
    });
describe('Split Array function', function() {
    it('es capar de dividir el arreglo en dos partes', function() {
        expect( split([2,6,8,5]) ).toEqual( [[2,6],[8,5]] );
    });
});
describe('Merge', function(){
        it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function(){
            expect(merge([2,5,7,9],[1,4,6,10] ) ).toEqual( [1,2,4,5,6,7,9,10] );
        });
});
describe('Merge Sort', function(){
      it('es capaz de ordenar un arreglo', function(){
        expect(mergeSort([2,5,7,9,1,4,6,10])).toEqual( [1,2,4,5,6,7,9,10] );
    });
    it("BIG O - deberia tener un número máximo de n log n pasos", function(){
        spyOn(window, "mergeSort").and.callThrough();
        var arr = [2,5,7,9,1,4,6,10]
        mergeSort(arr)
        expect(mergeSort.calls.count()).toBeLessThan(arr.length * Math.log(arr.length))
      }); 
 });