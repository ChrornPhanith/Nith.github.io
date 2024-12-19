const imgList = ["image/pic3.jpeg","image/pic4.jpeg","image/pic2.jpeg","image/pic1.jpeg"];
const cate = ['ICED COFFEE','FRAPPE COFFEE','HOT COFFEE','TEA','LIGHT','MILK/CHOCOLATE','JUICE&SMOOTHIES','ADDITIONAL'];
function getCate(){
    let txt="";
    cate.forEach((el,i)=>{
       txt +=`
        <div class="cate">
                        <i class="fa-solid fa-ellipsis"></i>
                        <p>${cate[i]}</p>
                      </div>
                     
       `;
    });
    document.querySelector('.category').innerHTML = txt;
}
// getCate();
// getImg();
    function getImg(){
        let txt = "";
        imgList.forEach( (el,i)=>{
            txt +=` 
            

                 <img src="${imgList[i]}" alt="" id = "a1">
              

      `;
        });
        document.querySelector(".box").innerHTML  = txt;
        document.querySelector(".box").style.display="none";
        console.log(imgList[0]);
    }
    $(document).ready(function(){
        var slide = $('.box');
        var i =0;
        slide.hide();
        slide.eq(i).show();
        $('.bar').click(function(){
           $('.a').slideToggle();
        });
        $('.btnNext').click(function(){
            $('.box').eq(i).hide();
            i++;
            if(i>3){
                i=0;
            }
            $('.box').eq(i).show();
           
         });
         $('.btnBack').click(function(){
            $('.box').eq(i).hide();
            i--;
            if(i<0){
                i=3;
            }
            $('.box').eq(i).show();
           
         });
         function GetNext(){
            $('.box').eq(i).hide();
            i++;
            if(i>3){
                i=0;
            }
            $('.box').eq(i).show();
         }
         setInterval(GetNext,3000);
         const itemProducts = [
            {
                'product':'Iced Cappuccino',
                'price':'1.75',
                'img':'image/1.png'
            },
            {
                'product':'Iced Latte',
                'price':'2.00',
                'img':'image/2.png'
            },
            {
                'product':'Iced Amazon Extra',
                'price':'2.30',
                'img':'image/3.png'
            },
            {
                'product':'Iced Black Coffe',
                'price':'1.75',
                'img':'image/4.png'
            },
            
        ];
        const ItemAll =[
            {
                "name":'ALL',
                "id":0,
                "sub":[
                    {
                        'product':'Frappe Cappuccino',
                        'price':'1.75',
                        'img':'image/a1.png'
                    },
                    {
                        'product':'Frappe Latte',
                        'price':'2.00',
                        'img':'image/a2.png'
                    },
                    {
                        'product':'Frappe Amazon Extra',
                        'price':'2.30',
                        'img':'image/a3.png'
                    },
                    {
                        'product':'Iced Black Coffe',
                        'price':'1.75',
                        'img':'image/a4.png'
                    },
                    {
                        'product':'Iced Cappuccino',
                        'price':'2.35',
                        'img':'image/1.png'
                    },
                    {
                        'product':'Iced Latte',
                        'price':'2.00',
                        'img':'image/2.png'
                    },
                    {
                        'product':'Iced Amazon Extra',
                        'price':'2.30',
                        'img':'image/3.png'
                    },
                    {
                        'product':'Iced Black Coffe',
                        'price':'1.75',
                        'img':'image/4.png'
                    },
                    {
                        'product':'Hot Cappuccino',
                        'price':'3.75',
                        'img':'image/h1.png'
                    },
                    {
                        'product':'Hot Latte',
                        'price':'2.00',
                        'img':'image/h2.png'
                    },
                    {
                        'product':'Hot Amazon Extra',
                        'price':'2.30',
                        'img':'image/h3.png'
                    },
                    {
                        'product':'Hot Black Coffe',
                        'price':'1.75',
                        'img':'image/h4.png'
                    },
                    {
                        'product':'MATCHA RED BEAN',
                        'price':'2.75',
                        'img':'image/c.png'
                    },
                    {
                        'product':'MILK TEA',
                        'price':'2.00',
                        'img':'image/b.png'
                    },
                    {
                        'product':'Green Tea with milk',
                        'price':'2.30',
                        'img':'image/a.png'
                    },
                    {
                        'product':'Iced Black Coffe',
                        'price':'1.75',
                        'img':'image/4.png'
                    },
                    
                    
                ]
    
            },
            {
                "name":'Frappe COFFEE',
                "id":1,
                "sub":[
                    {
                        'product':'Frappe Cappuccino',
                        'price':'1.75',
                        'img':'image/a1.png'
                    },
                    {
                        'product':'Frappe Latte',
                        'price':'2.00',
                        'img':'image/a2.png'
                    },
                    {
                        'product':'Frappe Amazon Extra',
                        'price':'2.30',
                        'img':'image/a3.png'
                    },
                    {
                        'product':'Iced Black Coffe',
                        'price':'1.75',
                        'img':'image/a4.png'
                    },
                    
                    
                ]
    
            },
            {
                "name":'ICED COFFEE',
                "id":2,
                "sub":[
                    {
                        'product':'Iced Cappuccino',
                        'price':'2.35',
                        'img':'image/1.png'
                    },
                    {
                        'product':'Iced Latte',
                        'price':'2.00',
                        'img':'image/2.png'
                    },
                    {
                        'product':'Iced Amazon Extra',
                        'price':'2.30',
                        'img':'image/3.png'
                    },
                    {
                        'product':'Iced Black Coffe',
                        'price':'1.75',
                        'img':'image/4.png'
                    },
                    
                ]
    
            },
            {
                "name":'HOT COFFEE',
                "id":3,
                "sub":[
                    {
                        'product':'Hot Cappuccino',
                        'price':'3.75',
                        'img':'image/h1.png'
                    },
                    {
                        'product':'Hot Latte',
                        'price':'2.00',
                        'img':'image/h2.png'
                    },
                    {
                        'product':'Hot Amazon Extra',
                        'price':'2.30',
                        'img':'image/h3.png'
                    },
                    {
                        'product':'Hot Black Coffe',
                        'price':'1.75',
                        'img':'image/h4.png'
                    },
                    
                ]
    
            },
            {
                "name":'TEA',
                "id":4,
                "sub":[
                    {
                        'product':'MATCHA RED BEAN',
                        'price':'2.75',
                        'img':'image/c.png'
                    },
                    {
                        'product':'MILK TEA',
                        'price':'2.00',
                        'img':'image/b.png'
                    },
                    {
                        'product':'Green Tea with milk',
                        'price':'2.30',
                        'img':'image/a.png'
                    },
                    {
                        'product':'Iced Black Coffe',
                        'price':'1.75',
                        'img':'image/4.png'
                    },
                    
                ]
    
            },
            {
                "name":'LIGHT',
                "sub":[
                    {
                        'product':'Mocha Honey',
                        'price':'1.95',
                        'img':'image/l3.png'
                    },
                    {
                        'product':'Iced Latte',
                        'price':'2.00',
                        'img':'image/l2.png'
                    },
                    {
                        'product':'Iced Amazon Extra',
                        'price':'2.30',
                        'img':'image/l1.png'
                    },
                    {
                        'product':'Fresh Milk Tea',
                        'price':'1.75',
                        'img':'image/l4.png'
                    },
                    
                ]
    
            },
            {
                "name":'MILK/CHOCOLATE',
                "sub":[
                    {
                        'product':'Frappe Fresh Milk',
                        'price':'2.00',
                        'img':'image/m1.png'
                    },
                    {
                        'product':'Iced Fresh Milk',
                        'price':'2.00',
                        'img':'image/m2.png'
                    },
                    {
                        'product':'Hot Milk',
                        'price':'2.30',
                        'img':'image/m3.png'
                    },
                    {
                        'product':'Hot Chocolate',
                        'price':'1.75',
                        'img':'image/m4.png'
                    },
                    
                ]
    
            },
            {
                "name":'JUICE&SMOOTHIES',
                "sub":[
                    {
                        'product':'Frappe Lynchee juice',
                        'price':'2.75',
                        'img':'image/j2.png'
                    },
                    {
                        'product':'Iced Lynchee juice',
                        'price':'2.00',
                        'img':'image/j1.png'
                    },
                    {
                        'product':'Frappe Green Tea',
                        'price':'2.30',
                        'img':'image/j3.png'
                    },
                    {
                        'product':'น้ำสตรอเบอร์รี่ปั่น',
                        'price':'1.75',
                        'img':'image/j4.png'
                    },
                    
                ]
    
            },
            {
                "name":'ADDITIONALS',
                "sub":[
                    {
                        'product':'โยเกิร์ตสมูทตี้มิกซ์เบอรรี่',
                        'price':'3.75',
                        'img':'image/z1.png'
                    },
                    {
                        'product':'น้ำเบอร์รีรวมผสมน้ำทับทิม 100%',
                        'price':'2.00',
                        'img':'image/z2.png'
                    },
                    {
                        'product':'น้ำมิกซ์เบอร์รี่ปั่นzz',
                        'price':'2.30',
                        'img':'image/z3.png'
                    },
                    {
                        'product':'สตรอเบอร์รี่ชีสเค้ก',
                        'price':'1.75',
                        'img':'image/z4.png'
                    },
                    
                ]
    
            }
        ];
        // GetItems();
        function GetItems(){
            let txt ="";
            itemProducts.forEach((el,i)=>{
            txt +=`
            <div class="products">
                          <div class="dis">
                            <p>${itemProducts[i].product}</p>
                            <p>$ ${itemProducts[i].price}</p>
                          </div>
                          <div class="pro">
                            <img src="${itemProducts[i].img}" alt="">
                            <div class="plus"><i class="fa-solid fa-plus"></i></div>
                          </div>
                        </div>
                        
            `;
            });
            $('.all-Item').html(txt);
        }

       
        getAll();
        function getAll(){
            let txt ="";
            var w =0;
            for(i=0;i<ItemAll.length;i++){
                txt +=`
                <div class="cate ${w}" }">
                       <i class="fa-solid fa-ellipsis"></i>
                       <p>${ItemAll[i].name}</p>
                     </div>
           `;
            w++;
            }
          
            $('.category').html(txt);
            $(".can").click(function(){
             $(".addCart").slideToggle();
            });
           
             
         
                $(".2").click(function(){
                    let sub = ItemAll[2].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus"><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });

                $(".5").click(function(){
                    let sub = ItemAll[5].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus" id = ""><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });

                $(".6").click(function(){
                    let sub = ItemAll[6].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus"><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });

                $(".7").click(function(){
                    let sub = ItemAll[7].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus"><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });

                $(".8").click(function(){
                    let sub = ItemAll[8].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus"><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });
                $(".3").click(function(){
                    let sub = ItemAll[3].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus"><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });
                $(".1").click(function(){
                    let sub = ItemAll[1].sub; 
                    var u = 9;
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus  ${u}" ><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     u++;
                     
                    });
                    $('.all-Item').html(txt1);
                   
                  
                });
                $(".4").click(function(){
                    let sub = ItemAll[4].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus"><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });
                $(".0").click(function(){
                    let sub = ItemAll[0].sub; 
                    let txt1 = "";
                    sub.forEach((e,i)=>{
                     txt1 +=`
                     <div class="products">
                              <div class="dis">
                                <p>${e.product}</p>
                                <p>$ ${e.price}</p>
                              </div>
                              <div class="pro">
                                <img src="${e.img}" alt="">
                                <div class="plus"><i class="fa-solid fa-plus"></i></div>
                              </div>
                            </div>
                     `;
                     
                    });
                    $('.all-Item').html(txt1);
                });
                let sub = ItemAll[0].sub; 
              
               
                let txt1 = "";

             
                 sub.forEach((item,i) => {
                        txt1 += `
                            <div class="products">
                                <div class="dis">
                                    <p>${item.product}</p>
                                    <p>$ ${item.price}</p>
                                </div>
                                <div class="pro">
                                    <img src="${item.img}" alt="">
                                    <div class="plus"><i class="fa-solid fa-plus"></i></div>
                                </div>                                                                                                
                            </div>
                        `;
                    });
              
                
                $('.all-Item').html(txt1);
              
            
                 var n =0;
                 $('.news').hide();
                 $('.all-Item').on('click','.products',function(){
                    //  $('.news').html(n++);
                     var name = $(this).find('p:eq(0)').text();
                     var price = $(this).find('p:eq(1)').html();
                     var qty = 1;
                   
                    //  var eThis = $(this);
                     var img = $(this).find('img').attr("src");
                     var cart_item = `
                      <div class="products">
                         <div class="dis">
                           
                          <div class="cal">
                             <div><i class="fa-solid fa-minus dok"></i></div>
                             <p class="r">${qty}</p>
                             <div><i class="fa-solid fa-plus bok"></i></div>
                          </div>
                          <p>${name}</p>
                           <p>${price}</p>
                         </div>
                         <div class="pro">
                           <img src="${img}" alt="">
                         </div>
                         <div class="cancel"><i class="fa-regular fa-trash-can"></i></div>
                       </div>
                     `;
                     $('.addCart').prepend(cart_item);
                     $('.no').hide();
                     $('.totalPrice').css({
                        'display':'flex'
                     });
                     $('.pay').css({
                        'display':'flex'
                     });
                     $('.news').html(n=n+1);
                     $('.news').show();
                     calculateTotal(); 
                    
                    
                   
                 
                    
                 });
                 $('.addCart').on('click','.bok',function(){       
                    var qtyElement = $(this).closest('.cal').find('.r');
                 // Increment the quantity
                  var qty = parseInt(qtyElement.text());
                    qty++;
                   // Update the quantity in the DOM
                     qtyElement.text(qty);
                     calculateTotal(); 
                    
                  });
                  $('.addCart').on('click','.dok',function(){       
                    var qtyElement = $(this).closest('.cal').find('.r');
                    // Increment the quantity
                      var qty = parseInt(qtyElement.text());
                     qty--;
                     // Update the quantity in the DOM
                     qtyElement.text(qty);
                     calculateTotal(); 
                    
                  });
                 $('.addCart').on('click','.cancel',function(){       
                    $(this).parents('.products').remove();
                    $('.news').html(n=n-1);
                    calculateTotal(); 
                  });
                  $(".can-menu").click(function(){
                    $(".a").slideToggle();
                    $(".blank").toggle();

                  });
                  $(".bar").click(function(){
                   $(".blank").toggle();
                  });
                  $(".blank").click(function(){
                    $(".a").slideToggle();
                    $(".blank").hide();
                  });
                 
                
                 $('#btnCart').click(function(){
                  
                   $('.addCart').slideToggle();
                 });
                 function calculateTotal() {
                    var total = 0;
                    $('.addCart .products').each(function() {
                        var qty = parseInt($(this).find('.r').text());
                        // Extract and parse the price text
                        var priceText = $(this).find('.dis p:eq(2)').text().replace('$', '').trim();
                        var price = parseFloat(priceText);
                        
                        if (!isNaN(price) && !isNaN(qty)) {
                            total += qty * price;
                        }
                    });
                    $('.totalPrice').text(`Total: $${total.toFixed(2)}`);
                }
               
            
        }
      
        
    });

  