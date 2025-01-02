import{d,r as i,c as l,w as m,_ as u,o,a as e,b as s,e as p,F as g,f as r,t as n}from"./index-CErmjBRI.js";const x={id:"app",class:"w-full p-4 bg-white"},f={class:"flex items-center mb-2"},h={class:"text-xl font-semibold"},b={class:"text-gray-600"},y={class:"text-gray-800"},I=d({__name:"CommentsView",setup(z){const c=i([{id:1,name:"Juan Pérez",date:"2023-10-01",text:"Fui víctima de un hackeo en mi cuenta bancaria. Perdí una gran cantidad de dinero y fue una experiencia muy estresante.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:2,name:"María López",date:"2023-09-15",text:"Alguien accedió a mis redes sociales y comenzó a enviar mensajes a mis contactos pidiendo dinero. Fue muy difícil recuperar el control de mis cuentas.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:3,name:"Carlos García",date:"2023-08-20",text:"Recibí un correo electrónico que parecía ser de mi banco, pero resultó ser una estafa. Afortunadamente, no caí en la trampa, pero fue una experiencia aterradora.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:4,name:"Ana Martínez",date:"2023-07-30",text:"Me hackearon la cuenta de correo electrónico y utilizaron mi identidad para estafar a otras personas. Fue un proceso largo y complicado recuperar mi cuenta.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:5,name:"Luis Fernández",date:"2023-06-25",text:"Perdí acceso a mi cuenta de Facebook y el hacker comenzó a publicar contenido inapropiado. Fue muy vergonzoso y difícil de solucionar.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:6,name:"Elena Gómez",date:"2023-05-10",text:"Recibí una llamada telefónica de alguien que se hacía pasar por un representante de mi banco. Casi caigo en la trampa, pero afortunadamente me di cuenta a tiempo.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:7,name:"Miguel Torres",date:"2023-04-18",text:"Alguien utilizó mi tarjeta de crédito para hacer compras en línea sin mi autorización. Fue un proceso largo y complicado recuperar mi dinero.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:8,name:"Laura Sánchez",date:"2023-03-22",text:"Me hackearon la cuenta de Instagram y comenzaron a enviar mensajes a mis seguidores pidiendo dinero. Fue muy difícil recuperar el control de mi cuenta.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:9,name:"Jorge Ramírez",date:"2023-02-14",text:"Recibí un mensaje de texto que parecía ser de mi banco, pero resultó ser una estafa. Afortunadamente, no caí en la trampa, pero fue una experiencia aterradora.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:10,name:"Patricia Ruiz",date:"2023-01-30",text:"Alguien accedió a mi cuenta de correo electrónico y comenzó a enviar mensajes a mis contactos pidiendo dinero. Fue muy difícil recuperar el control de mi cuenta.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:11,name:"Roberto Díaz",date:"2022-12-25",text:"Perdí acceso a mi cuenta de Twitter y el hacker comenzó a publicar contenido inapropiado. Fue muy vergonzoso y difícil de solucionar.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:12,name:"Carmen Morales",date:"2022-11-18",text:"Recibí una llamada telefónica de alguien que se hacía pasar por un representante de mi banco. Casi caigo en la trampa, pero afortunadamente me di cuenta a tiempo.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:13,name:"Francisco Herrera",date:"2022-10-10",text:"Alguien utilizó mi tarjeta de débito para hacer compras en línea sin mi autorización. Fue un proceso largo y complicado recuperar mi dinero.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:14,name:"Isabel Castro",date:"2022-09-05",text:"Me hackearon la cuenta de LinkedIn y comenzaron a enviar mensajes a mis contactos pidiendo dinero. Fue muy difícil recuperar el control de mi cuenta.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"},{id:15,name:"Antonio Vargas",date:"2022-08-20",text:"Recibí un correo electrónico que parecía ser de mi banco, pero resultó ser una estafa. Afortunadamente, no caí en la trampa, pero fue una experiencia aterradora.",image:"https://placehold.co/100x100?text=Profile+Image&bg=gray"}]);return i(!1),(v,a)=>(o(),l(u,null,{main:m(()=>[e("div",x,[a[2]||(a[2]=e("h1",{class:"mb-6 text-6xl font-bold text-center font-lexend text-sky-800"},"Experiencias de Estafas",-1)),(o(!0),s(g,null,p(c.value,t=>(o(),s("div",{key:t.id,class:"p-4 mb-4 ease-out rounded-lg shadow-md bg-slate-50 hover:border-2 hover:border-sky-500 hover:shadow-lg"},[e("div",f,[a[0]||(a[0]=e("i",{class:"mr-4 text-4xl fas fa-user-circle"},null,-1)),e("div",null,[e("h2",h,n(t.name),1),e("p",b,n(t.date),1)])]),e("p",y,n(t.text),1),a[1]||(a[1]=e("div",{class:"flex justify-between mt-4"},[e("button",{class:"text-blue-500 hover:text-blue-700"},[e("i",{class:"fas fa-thumbs-up"}),r(" Me gusta ")]),e("a",{href:"#responder"},[e("button",{class:"p-1 text-white bg-orange-500 rounded-md hover:scale-105"},[e("i",{class:"fas fa-chat"}),r(" Responder ")])])],-1))]))),128))]),a[3]||(a[3]=e("section",{id:"responder",class:"p-6 bg-gray-100 rounded-lg shadow-md"},[e("h2",{class:"flex items-center mb-4 text-3xl font-bold text-sky-950 font-lexend"},[e("i",{class:"mr-3 fas fa-comment-dots text-sky-500"}),r(" Agregue un nuevo comentario ")]),e("textarea",{name:"comment",id:"comment",class:"w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent",placeholder:"Escribe tu comentario aquí...",rows:"5"},"  ")],-1)),a[4]||(a[4]=e("section",{class:"flex justify-center my-6"},[e("button",{class:"flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-all duration-300 ease-in-out transform bg-orange-500 rounded-lg shadow-md font-poppins hover:bg-orange-600 hover:scale-105"},[e("i",{class:"mr-3 fas fa-paper-plane"}),r(" Agregar comentario ")])],-1))]),_:1}))}});export{I as default};