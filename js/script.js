let  obj=[
    {
        id:1,
        product:"toaster",
        brand:"iBELL",
        price:3000,
        img:"./image/sandwich.webp",
    },
    {
        id:2,
        product:"induction-cooktop",
        brand:"Philips",
        price:3000,
        img:"./image/induction.webp",
    },
    {
        id:3,
        product:"Fryer",
        brand:"Philips",
        price:7500,
        img:"./image/fryer.webp",
    },
   {
        id:4,
        product:"Kettle",
        brand:"Pigeon",
        price:600,
        img:"./image/kettle.webp",
    },
    {
        id:5,
        product:"soup maker",
        brand:"wonderchef",
        price:7500,
        img:"./image/soupmaker.webp",
    },
   
    {
        id:6,
        product:"hair dyer",
        brand:"Philips",
        price:830,
        img:"./image/mixies.webp",
    },
    {
        id:7,
        product:"ironbox",
        brand:"Philips",
        price:1600,
        img:"./image/ironbox.webp",
    },
    {
        id:8,
        product:"water purifier",
        brand:"Libra",
        price:1600,
        img:"./image/purifier.webp",
    },
    {
        id:9,
        product:"chopper",
        brand:"Borosil",
        price:1900,
        img:"./image/chopper.webp",
    },
   {
        id:10,
        product:"Vacuum cleaner",
        brand:"Insala",
        price:2500,
        img:"./image/vaccum.webp",
    },
   
   {
         id:11,
        product:"Waffle Maker",
        brand:"Borosil-Neo",
        price:2900,
        img:"./image/wafflemaker.webp",
    },
    {
        id:12,
        product:"Straighter brush",
        brand:"philips",
        price:2800,
        img:"./image/straighter.webp",
    },
    {
        id:13,
        product:"hand blender",
        brand:"Philips",
        price:2100,
        img:"./image/blender.webp",
    },
    {
        id:14,
        product:"vegetable chopper",
        brand:"pigeon",
        price:300,
        img:"./image/minichopper.webp"
    },
    {
        id:15,
        product:"electric multi cooker",
        brand:"glen",
        price:1600,
        img:"./image/multicooker.jpg",
    },
    {
        id:16,
        product:"Ladder",
        brand:"plantex",
        price:3500,
        img:"./image/ladder.jpg",
    },
    {
        id:17,
        product:"Sandwich maker",
        brand:"Prestige",
        price:1300,
        img:"./image/sandwich-maker.webp",
    },
    {
        id:18,
        product:"Toaster and oven",
        brand:"Lifelong",
        price:2200,
        img:"./image/toaster.jpg",
    },
   {
        id:19,
        product:"Rice cooker",
        brand:"Devay",
        price:700,
        img:"./image/cooker.jpg"
    },
   {
        id:20,
        product:"Kettle Steamer",
        brand:"Agaro",
        price:1700,
        img:"./image/kettlesteamer.jpg",
    }
];


// console.log(obj);


            //    <div class="col-3">
            //         <div class="obj-details">
            //            <div class="image-pic">
            //              <img src="./image/sandwich.webp" alt="image">
            //            </div>
            //            <div class="headings">
            //              <p>Toaster</p>
            //              <p>3000</p>
            //            </div>
            //         </div>
            //     </div>


            // let cartitem=[];

            let cartitem=[
                // {
                //     id:1,
                //     product:"toaster",
                //     brand:"iBELL",
                //     price:3000,
                //     img:"./image/sandwich.webp",
                // }
            ];

            





            const addcartitems = function(id){
                
             let findcart = cartitem.find(function(item){
                   return item.id ===id; 
             })
            //  console.log(findcart);
             if(findcart){
                 let updatecart = cartitem.map(function(item){
                     if(item.id === id){
                         item.qty += 1;
                         return item;
                     }else return item;
                 })
                 cartitem=updatecart;
                 console.log(cartitem);

             }
             else{
                 let setcartitem=obj.find(function(item){
                     return item.id === id;
                 } )
                 setcartitem.qty=1;  
                 cartitem.push(setcartitem);
                 console.log(cartitem);
                //  cartitemelm(cartitem);
             }

            }

            // let cartitemelem = document.getElementById("cart-item");
            // function cartitemelem(cart){
            //     if(cart.length>0){
            //         let cartlist =`<div class="cart1">
            //         <div class="img-pic">
            //             <img src="./image/blender.webp" alt="image">
            //         </div>
            //         <div>
                        
            //             <p>Hand blender- Philips</p> 
        
            //             <div class="price">
            //                 <div class="productprce" id="pd1">2100</div>   
            //                 <div class="prcechange">2100</div> 
            //             </div>
                    
            //             <div class="valuebtn">
            //                 <button class="minus">-</button>
            //                 <input type="number" class="ipqty" value="1">
            //                 <button class="plus">+</span></button>
            //             </div>
        
            //         </div>
                   
            //         <i class="fa fa-trash " aria-hidden="true"></i>
            //      </div>`
            //     }
            // }


        
            obj.forEach(function(elem,i){
                
            //To create element
            let div_col =document.createElement("div"),
             div_obj_details =document.createElement("div"),
             div_image_pic =document.createElement("div"),
             image_tag =document.createElement("img"),
             div_headings =document.createElement("div"),
             para_name=document.createElement("p"),
             para_price=document.createElement("p"),
             btn=document.createElement("button");

             //To add attributes
             div_col.setAttribute("class","col-3");
             div_obj_details.setAttribute("class","obj-details");
             div_image_pic.setAttribute("class","image-pic");
             div_headings.setAttribute("class","headings");
             btn.setAttribute("class","button");

             //To add text
             para_name.innerText=elem.product +" - " +elem.brand;
             para_price.innerText=elem.price;
             btn.innerText="Add to Cart";
             btn.onclick = addcartitems.bind(null, elem.id)

             //To add image
             image_tag.src =elem.img;

             //to append one html element to another html element
             div_col.appendChild(div_obj_details);
             div_obj_details.append(div_image_pic,div_headings,btn);
             div_image_pic.appendChild(image_tag);
             div_headings.append( para_name,para_price);

             //to add html element into html document
             let section1row =document.getElementById("sec1-row");
             section1row.append(div_col);

            //  console.log(section1row);
            });

        //    let incqty =  document.querySelectorAll('.plus');

        //    incqty.forEach((inc)=>{
        //      inc.addEventListener('click',increment);
        //    });

        //    function increment(){
        //     let getproductprce= this.parentElement.previousElementSibling.querySelector('.productprce').innerHTML;
        //     let pricevalue= parseInt(getproductprce);
        //     let qtyinc = parseInt(this.previousElementSibling.value);
        //     let subtotal=0;
        //     if(qtyinc>=1 && qtyinc<10){
        //         qtyinc++;
        //         subtotal +=pricevalue*qtyinc;
        //         this.previousElementSibling.value=qtyinc;
        //         this.parentElement.previousElementSibling.querySelector('.prcechange').innerHTML = subtotal;
        //     }
        //    }

        //    let deqty =  document.querySelectorAll('.minus');

        //    deqty.forEach((inc)=>{
        //      inc.addEventListener('click',decrement);
        //    });

        //    function decrement(){
        //     let getproductprce= this.parentElement.previousElementSibling.querySelector('.productprce').innerHTML;
        //     let pricevalue= parseInt(getproductprce);
        //     let qtydec = parseInt(this.nextElementSibling.value);
        //     let subtotal=0;
        //     if(qtydec>1){
        //         qtydec--;
        //         subtotal +=pricevalue*qtydec;
        //         this.nextElementSibling.value=qtydec;
        //         this.parentElement.previousElementSibling.querySelector('.prcechange').innerHTML = subtotal;
        //     }
        //    }

    





            // let removebtn = document.querySelectorAll(".fa-trash");
               
            // removebtn.forEach((bin)=>{
            //     bin.addEventListener("click",removeitem);
            // });

            // function  removeitem(){
            //     this.parentElement.remove();
            // }



          
                //  function cartitemelm(cart){
                 

                //  }

               