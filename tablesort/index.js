class TableSort {
    constructor(selector){
       
        this.selector = selector;
    }

    init(){
        console.log(this.selector)
        this.dataSort();
        
    }

    dataSort(){
    }
}


const thSort = ['.product','.mount','.money','.date'];
const data = new TableSort(thSort);
console.log(data.init());