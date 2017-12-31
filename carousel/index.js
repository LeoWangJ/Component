class Carousel {
    
    constructor(selector, time, pics){
        this.selector = selector;
        this.time = time;
        this.pics = pics;
        this.total = 0;
        this.index = 0;
    }

    start(){
        this.renderHtml();
        this.show();
        this.timer();
    }

    timer(){
        let that = this;
        
        setTimeout(function(){
            that.hidden();
            that.index++;

            if(that.total == that.index ){
                that.index = 0;
            }

            that.show();
            that.timer();
        }, that.time);
        
    }
    
    show(){
        let _no = '.no_' + this.index;
        document.querySelector(_no).style.display = 'block';
    }

    hidden(){
        let _no = '.no_' + this.index;
        document.querySelector(_no).style.display = 'none';
    }

    renderHtml(){
        let html = '';
        html +='<div class="leo-carousel">';
        for(const [index, value] of this.pics.entries()){
            html += `<div class="item large no_${index}" style="display:none" >
                        <a>
                            <img src="${value}"/>
                        </a>
                     </div>`;
            this.total++;
        }
        html += '</div>';
        document.querySelector(this.selector).innerHTML = html;
    }
}

const pics = ['./pictures/coding2.jpg','./pictures/images.jpg','./pictures/road.jpg']
const call = new Carousel('.carousel', 3000, pics);
call.start();