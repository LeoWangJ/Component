class TableSort {
    constructor(selector){
       
        this.selector = selector;
    }

    init(){
        console.log(this.selector)
        this.event();
    }
    
    event(){
        for(let key of this.selector){
            document.querySelector(key).addEventListener('click',function(e){
                var dom = e.currentTarget || e.target;
                console.log(dom);
            })
        }
    }
    dataSort(){
    }
}


const thSort = ['.product','.mount','.money','.date'];
const data = new TableSort(thSort);
data.init();