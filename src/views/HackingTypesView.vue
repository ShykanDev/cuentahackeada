<template>
  <MainLayout>
    <template #main>
      <section class="flex flex-col gap-4">
        <img
          src="https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="fixed top-0 bottom-0 left-0 right-0 w-full animate-fade-up">
        <article class="fixed top-0 bottom-0 left-0 right-0 w-full bg-black opacity-35 "></article>
        <TypesCard v-for="hackingType in hackingTypes" :key="hackingType.titleCard" :info1="hackingType.info1"
          :info2="hackingType.info2" :shortSummary="hackingType.shortSummary" :titleCard="hackingType.titleCard"
          :img-src="hackingType.imgSrc" class="animate-fade-up animate-delay-300" />

      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import TypesCard from '@/components/TypesCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const hackingTypes = [
  {
    titleCard: "Clonación de Tarjetas",
    shortSummary: "Robo de información bancaria en cajeros y puntos de venta.",
    info1: "En cajeros automáticos se usan dispositivos como skimmers y cámaras ocultas para capturar tu PIN. Los skimmers son pequeños dispositivos que se colocan sobre el lector de tarjetas del cajero automático y capturan la información de la banda magnética de tu tarjeta. Estos dispositivos son difíciles de detectar porque están diseñados para parecer parte del cajero. Las cámaras ocultas, por otro lado, se colocan en lugares estratégicos para grabar el PIN que ingresas. Estas cámaras pueden estar escondidas en folletos, espejos o incluso en el mismo cajero. Los delincuentes luego utilizan esta información para crear tarjetas falsas y realizar compras fraudulentas.",
    info2: "En restaurantes o gasolineras, empleados deshonestos clonan tarjetas al llevarlas y traerlas para pagar. Esto se hace utilizando dispositivos portátiles que pueden leer la información de la tarjeta en cuestión de segundos. Una vez que la información es capturada, los delincuentes pueden crear tarjetas falsas con la misma información y utilizarlas para realizar compras fraudulentas. Es importante estar atento y no perder de vista tu tarjeta cuando la entregas para pagar. Además, considera utilizar métodos de pago más seguros, como tarjetas de crédito con chip o aplicaciones de pago móvil, que son más difíciles de clonar.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/719efce7-9535-40d9-928f-911e58b25d58.jpeg',

  },
  {
    titleCard: "Hackeo con Ayudas Falsas",
    shortSummary: "Trucos en cajeros automáticos para robar datos.",
    info1: "Colocan chicles, pegamento o dispositivos para atascar el cajero. Estos métodos se utilizan para hacer que el cajero automático parezca estar fuera de servicio o que tu tarjeta se haya quedado atascada. Los delincuentes esperan a que te vayas y luego recuperan la tarjeta para clonarla. También pueden instalar dispositivos que bloquean la ranura de la tarjeta para que no puedas recuperarla. Estos dispositivos pueden ser difíciles de detectar, por lo que es importante estar atento a cualquier señal de manipulación en el cajero.",
    info2: "Se ofrecen a ayudarte mientras observan tus datos o manipulan la máquina para robarte. Los delincuentes pueden hacerse pasar por buenos samaritanos y ofrecerte ayuda para recuperar tu tarjeta o completar la transacción. Mientras te ayudan, observan tu PIN o manipulan la máquina para robar tu información. Es importante no aceptar ayuda de extraños en cajeros automáticos y siempre cubrir el teclado con la mano al ingresar tu PIN. Además, si sospechas que el cajero ha sido manipulado, es mejor utilizar otro cajero o informar al banco.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/5e872a50-6277-4567-ac3a-03621d3464c0.jpeg',

  },
  {
    titleCard: "Hackeo de Identidad",
    shortSummary: "Uso de tus datos personales para suplantarte.",
    info1: "Pueden abrir cuentas bancarias, pedir préstamos o realizar compras a tu nombre. Los delincuentes utilizan tu información personal, como tu nombre, dirección, fecha de nacimiento y número de seguro social, para abrir cuentas bancarias, solicitar préstamos o realizar compras fraudulentas. Esto puede afectar tu historial crediticio y dejarte con deudas que no has contraído. Además, los delincuentes pueden utilizar tu identidad para cometer otros delitos, lo que puede tener graves consecuencias legales para ti.",
    info2: "Tu información puede ser robada de redes sociales, correos electrónicos o bases de datos vulnerables. Los delincuentes pueden obtener tu información personal a través de phishing, malware o vulnerabilidades en bases de datos. También pueden recopilar información de tus perfiles en redes sociales y correos electrónicos. Es importante proteger tu información personal y no compartirla en línea de manera indiscriminada. Utiliza contraseñas fuertes y únicas para cada cuenta, y considera utilizar un gestor de contraseñas para mantenerlas seguras.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/41b3b7d1-28fb-4021-9838-aead14db89bb.jpeg',

  },
  {
    titleCard: "Phishing",
    shortSummary: "Engaños por correos o páginas falsas.",
    info1: "Te envían mensajes o correos que parecen de tu banco para pedirte información confidencial. Los correos de phishing suelen parecer legítimos y pueden incluir logotipos y enlaces que parecen oficiales. Los delincuentes te piden que ingreses tu información confidencial, como números de cuenta, contraseñas o datos personales, en páginas web falsas que imitan a las oficiales. Estas páginas están diseñadas para capturar tu información y utilizarla para cometer fraudes. Es importante verificar siempre la autenticidad de los correos y no hacer clic en enlaces sospechosos.",
    info2: "Incluyen enlaces a páginas falsas que se parecen mucho a las oficiales para capturar tus datos. Las páginas de phishing están diseñadas para parecer idénticas a las páginas oficiales de bancos, tiendas en línea u otras instituciones. Los delincuentes utilizan técnicas avanzadas para hacer que estas páginas parezcan legítimas, como copiar el diseño y los logotipos de las páginas oficiales. Es importante revisar siempre la URL de la página web y asegurarte de que estás en el sitio oficial antes de ingresar cualquier información confidencial. Además, considera utilizar software de seguridad que pueda detectar y bloquear páginas de phishing.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/cfad8d41-3fd6-4a11-8f30-6eb3f4b006a1.jpeg',

  },
  {
    titleCard: "Fraude en Compras Online",
    shortSummary: "Tiendas falsas o productos inexistentes.",
    info1: "Crean sitios web que parecen confiables pero solo buscan robar tu información bancaria. Los delincuentes crean sitios web falsos que imitan a tiendas en línea legítimas. Estos sitios están diseñados para parecer confiables y atractivos, con ofertas y productos que parecen reales. Sin embargo, su único propósito es capturar tu información bancaria cuando intentas realizar una compra. Una vez que ingresas tus datos, los delincuentes los utilizan para realizar compras fraudulentas o venderlos en el mercado negro.",
    info2: "Ofrecen productos a precios demasiado bajos como gancho para atraer víctimas. Los delincuentes utilizan ofertas irresistibles, como productos a precios muy bajos o descuentos exagerados, para atraer a las víctimas. Estas ofertas suelen ser demasiado buenas para ser verdad y están diseñadas para captar tu atención y hacer que realices una compra sin pensarlo dos veces. Es importante ser cauteloso con las ofertas que parecen demasiado buenas para ser verdad y verificar siempre la reputación del sitio web antes de realizar una compra.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/1d00e8e2-a0b0-4e0d-9965-6bc4821be4a5.jpeg',

  },
  {
    titleCard: "Hackeo por Redes Wi-Fi Públicas",
    shortSummary: "Riesgos al usar conexiones gratuitas.",
    info1: "Hackers pueden interceptar tus datos si te conectas a redes abiertas en cafeterías, aeropuertos o parques. Las redes Wi-Fi públicas son vulnerables a ataques de intermediarios, donde los hackers pueden interceptar la comunicación entre tu dispositivo y el punto de acceso. Esto les permite capturar tus datos personales, como contraseñas, números de tarjetas de crédito y otra información confidencial. Los hackers también pueden configurar redes Wi-Fi falsas que imitan a las redes legítimas para engañarte y hacer que te conectes a ellas.",
    info2: "Es más seguro usar una red privada o evitar ingresar datos sensibles en redes públicas. Para proteger tu información, es recomendable utilizar una red privada o una red virtual privada (VPN) cuando te conectes a redes Wi-Fi públicas. Las VPN cifran tu conexión y hacen que sea más difícil para los hackers interceptar tus datos. Además, evita ingresar información sensible, como contraseñas o datos bancarios, cuando estés conectado a una red pública. Si necesitas realizar transacciones en línea, es mejor hacerlo en una red segura y confiable.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/727b6246-2046-4781-bd6a-136d6acb2647.jpeg',

  },
  {
    titleCard: "Llamadas de Extorsión",
    shortSummary: "Falsas llamadas de bancos o instituciones.",
    info1: "Te llaman diciendo que hay problemas con tu cuenta y piden información sensible. Los delincuentes se hacen pasar por empleados de bancos, instituciones financieras o incluso agencias gubernamentales y te llaman para informarte de problemas ficticios con tu cuenta. Utilizan tácticas de presión y urgencia para hacer que les proporciones información sensible, como números de cuenta, contraseñas o datos personales. Estas llamadas suelen ser muy convincentes y pueden incluir detalles que parecen legítimos.",
    info2: "A menudo intentan generar pánico para que actúes rápido y sin pensar. Los delincuentes utilizan tácticas de miedo y urgencia para hacer que actúes rápidamente y sin pensar. Pueden decirte que tu cuenta ha sido comprometida, que hay transacciones sospechosas o que necesitan verificar tu identidad de inmediato. Estas tácticas están diseñadas para hacer que les proporciones información sin cuestionar la autenticidad de la llamada. Es importante mantener la calma y no proporcionar información sensible por teléfono. Si tienes dudas, cuelga y llama directamente a la institución utilizando un número de contacto verificado.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/b1875acf-eed0-459c-a966-aafd26e247a8.jpeg',

  },
  {
    titleCard: "Hackeo por Cargas USB Públicas",
    shortSummary: "Riesgos al cargar dispositivos en puertos públicos.",
    info1: "Puertos manipulados pueden robar datos de tu celular o instalar virus. Los puertos USB públicos en aeropuertos, estaciones de tren, cafeterías y otros lugares públicos pueden ser manipulados por hackers para robar datos de tu dispositivo o instalar malware. Estos puertos pueden estar conectados a dispositivos ocultos que capturan la información de tu teléfono o tableta mientras se carga. Además, los hackers pueden instalar malware en tu dispositivo que les permita acceder a tus datos personales y realizar actividades maliciosas.",
    info2: "Usa siempre tu propio cargador y evita conectar tu teléfono directamente a puertos desconocidos. Para proteger tu dispositivo, es recomendable utilizar tu propio cargador y conectarlo a una toma de corriente en lugar de utilizar puertos USB públicos. Si necesitas cargar tu dispositivo en un lugar público, considera utilizar un adaptador de corriente que te permita conectar tu cargador a una toma de corriente estándar. Además, evita conectar tu teléfono directamente a puertos USB desconocidos y utiliza siempre tu propio cable de carga.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/d93269f7-78b7-481a-96cd-fdb6e6c1bd48.jpeg',

  },
  {
    titleCard: "Hackeo de Redes Sociales",
    shortSummary: "Robo de cuentas y chantajes en línea.",
    info1: "Hackers pueden acceder a tus perfiles para enviar mensajes fraudulentos o chantajearte. Los delincuentes pueden obtener acceso a tus cuentas de redes sociales utilizando técnicas como phishing, malware o ingeniería social. Una vez que tienen acceso, pueden enviar mensajes fraudulentos a tus contactos, publicar contenido malicioso o incluso chantajearte utilizando información privada. Los hackers también pueden utilizar tus cuentas de redes sociales para difundir malware o realizar otras actividades maliciosas.",
    info2: "También pueden obtener información privada para usarla en tu contra. Los delincuentes pueden recopilar información privada de tus perfiles en redes sociales, como fotos, videos, mensajes y otros datos personales, y utilizarla para chantajearte o realizar otras actividades maliciosas. Es importante proteger tus cuentas de redes sociales utilizando contraseñas fuertes y únicas, y habilitando la autenticación de dos factores. Además, sé cauteloso con la información que compartes en línea y no aceptes solicitudes de amistad de personas desconocidas.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/0d4c9d44-72b2-428e-a4a5-2a6df570f328.jpeg',

  },
  {
    titleCard: "Hackeo en Gasolineras",
    shortSummary: "Clonación de tarjetas en estaciones de servicio.",
    info1: "Manipulan las terminales de pago para robar la información de tu tarjeta. Los delincuentes pueden instalar dispositivos de skimming en las terminales de pago de las gasolineras para capturar la información de tu tarjeta de crédito o débito. Estos dispositivos están diseñados para parecer parte de la terminal de pago y son difíciles de detectar. Una vez que la información de tu tarjeta es capturada, los delincuentes pueden utilizarla para realizar compras fraudulentas o venderla en el mercado negro.",
    info2: "Es recomendable pagar directamente en efectivo o con tarjetas digitales cuando sea posible. Para proteger tu información, es recomendable pagar en efectivo o utilizar tarjetas digitales, como Apple Pay o Google Pay, que son más seguras y difíciles de clonar. Si necesitas utilizar una tarjeta de crédito o débito, asegúrate de que la terminal de pago no haya sido manipulada y cubre el teclado con la mano al ingresar tu PIN. Además, revisa regularmente tus estados de cuenta para detectar cualquier actividad sospechosa.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/90b8f344-ce9f-456c-93e0-81cd52a5a6bd.jpeg',

  },
  {
    titleCard: "Skimming en Tiendas",
    shortSummary: "Clonación de tarjetas en cajas registradoras.",
    info1: "Usan dispositivos instalados en los lectores de tarjetas para robar datos al pasar tu tarjeta. Los delincuentes pueden instalar dispositivos de skimming en los lectores de tarjetas de las cajas registradoras de tiendas, restaurantes y otros establecimientos. Estos dispositivos capturan la información de la banda magnética de tu tarjeta cuando la pasas por el lector. Los delincuentes luego utilizan esta información para crear tarjetas falsas y realizar compras fraudulentas.",
    info2: "Prefiere usar métodos de pago sin contacto para mayor seguridad. Para proteger tu información, es recomendable utilizar métodos de pago sin contacto, como tarjetas con chip, aplicaciones de pago móvil o tarjetas digitales. Estos métodos son más seguros y difíciles de clonar. Si necesitas utilizar una tarjeta de crédito o débito, asegúrate de que el lector de tarjetas no haya sido manipulado y cubre el teclado con la mano al ingresar tu PIN. Además, revisa regularmente tus estados de cuenta para detectar cualquier actividad sospechosa.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/20cf2a0f-79b2-49bf-b6cb-166954de9d58.jpeg',

  },
  {
    titleCard: "Smishing",
    shortSummary: "Mensajes SMS fraudulentos.",
    info1: "Recibes mensajes que parecen oficiales, pidiendo que ingreses datos en un enlace. Los mensajes de smishing suelen parecer oficiales y pueden incluir logotipos y enlaces que parecen legítimos. Los delincuentes te piden que ingreses tu información confidencial, como números de cuenta, contraseñas o datos personales, en páginas web falsas que imitan a las oficiales. Estas páginas están diseñadas para capturar tu información y utilizarla para cometer fraudes. Es importante verificar siempre la autenticidad de los mensajes y no hacer clic en enlaces sospechosos.",
    info2: "No hagas clic en enlaces sospechosos ni compartas información a través de mensajes de texto. Para proteger tu información, es importante no hacer clic en enlaces sospechosos ni compartir información confidencial a través de mensajes de texto. Si recibes un mensaje que parece sospechoso, no respondas ni hagas clic en ningún enlace. En su lugar, contacta directamente a la institución utilizando un número de contacto verificado. Además, considera utilizar software de seguridad que pueda detectar y bloquear mensajes de smishing.",
    imgSrc: 'https://www.condusef.gob.mx/imagenes/prensa/126784_30_2015.jpg',

  },
  {
    titleCard: "Extorsión en Redes Sociales",
    shortSummary: "Chantajes con información privada.",
    info1: "Acceden a fotos, videos o mensajes privados para usarlos como herramienta de extorsión. Los delincuentes pueden obtener acceso a tus perfiles en redes sociales utilizando técnicas como phishing, malware o ingeniería social. Una vez que tienen acceso, pueden recopilar fotos, videos, mensajes y otros datos personales, y utilizarlos para chantajearte. Los delincuentes pueden amenazar con publicar esta información privada si no les proporcionas dinero o información adicional.",
    info2: "Evita compartir información sensible en chats o publicaciones públicas. Para proteger tu información, es importante no compartir información sensible en chats o publicaciones públicas. Utiliza configuraciones de privacidad estrictas en tus perfiles de redes sociales y sé cauteloso con la información que compartes en línea. Además, no aceptes solicitudes de amistad de personas desconocidas y considera utilizar contraseñas fuertes y únicas para cada cuenta.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/9f97de76-d8a4-4d35-a717-83676c43dcfc.jpeg',

  },
  {
    titleCard: "Hackeo de Paquetería Falsa",
    shortSummary: "Mensajes de estafas relacionados con envíos.",
    info1: "Te envían correos o mensajes diciendo que debes pagar un envío pendiente. Los delincuentes pueden enviarte correos electrónicos o mensajes de texto que parecen provenir de empresas de paquetería legítimas, informándote de un envío pendiente que debes pagar. Estos mensajes suelen incluir enlaces a páginas web falsas que imitan a las oficiales y te piden que ingreses tu información confidencial, como números de cuenta, contraseñas o datos personales.",
    info2: "Es importante verificar directamente con la empresa de paquetería antes de realizar cualquier pago. Para proteger tu información, es importante verificar directamente con la empresa de paquetería antes de realizar cualquier pago. No hagas clic en enlaces sospechosos ni compartas información confidencial a través de correos electrónicos o mensajes de texto. En su lugar, contacta directamente a la empresa de paquetería utilizando un número de contacto verificado.",
    imgSrc: 'https://images.pexels.com/photos/7843991/pexels-photo-7843991.jpeg?auto=compress&cs=tinysrgb&w=600',

  },
  {
    titleCard: "Estafas de Amistad Online",
    shortSummary: "Engaños de perfiles falsos en redes sociales.",
    info1: "Crean perfiles para hacerse pasar por amigos o familiares y pedirte dinero o información. Los delincuentes pueden crear perfiles falsos en redes sociales que imitan a amigos o familiares. Estos perfiles están diseñados para engañarte y hacer que confíes en ellos. Los delincuentes pueden pedirte dinero, información personal o incluso acceso a tus cuentas. También pueden utilizar estos perfiles para difundir malware o realizar otras actividades maliciosas.",
    info2: "Confirma siempre la identidad de quien te contacte para evitar caer en la estafa. Para proteger tu información, es importante confirmar siempre la identidad de quien te contacte antes de proporcionar cualquier información o dinero. Utiliza métodos de verificación, como llamadas telefónicas o mensajes directos, para confirmar la identidad de la persona. Además, sé cauteloso con las solicitudes de amistad de personas desconocidas y considera utilizar configuraciones de privacidad estrictas en tus perfiles de redes sociales.",
    imgSrc: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=600',

  },
  {
    titleCard: "Hackeo con Apps Falsas",
    shortSummary: "Descarga de aplicaciones maliciosas.",
    info1: "Apps que parecen útiles pero están diseñadas para robar datos personales o bancarios. Los delincuentes pueden crear aplicaciones falsas que parecen útiles y legítimas, pero que en realidad están diseñadas para robar tus datos personales o bancarios. Estas aplicaciones pueden incluir juegos, herramientas de productividad o incluso aplicaciones de banca. Una vez que descargas e instalas la aplicación, los delincuentes pueden acceder a tu información confidencial y utilizarla para cometer fraudes.",
    info2: "Descarga aplicaciones solo de tiendas oficiales como Google Play o App Store. Para proteger tu información, es importante descargar aplicaciones solo de tiendas oficiales como Google Play o App Store. Estas tiendas tienen políticas estrictas para verificar la autenticidad y seguridad de las aplicaciones. Además, revisa siempre las opiniones y calificaciones de las aplicaciones antes de descargarlas y asegúrate de que la aplicación sea de una fuente confiable.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/938d9f56-ae38-4106-a583-8d644c5c840c.jpeg',

  },
  {
    titleCard: "Hackeo por QR",
    shortSummary: "Códigos QR manipulados.",
    info1: "Escaneas códigos en lugares públicos y te llevan a sitios maliciosos o descargan malware. Los delincuentes pueden manipular códigos QR en lugares públicos, como restaurantes, tiendas o eventos, para llevarte a sitios web maliciosos o descargar malware en tu dispositivo. Estos códigos QR pueden parecer legítimos, pero en realidad están diseñados para capturar tu información confidencial o instalar software malicioso en tu dispositivo.",
    info2: "Verifica siempre el origen del código antes de escanearlo. Para proteger tu información, es importante verificar siempre el origen del código QR antes de escanearlo. Asegúrate de que el código QR provenga de una fuente confiable y legítima. Además, considera utilizar aplicaciones de escaneo de códigos QR que incluyan funciones de seguridad para detectar y bloquear códigos QR maliciosos.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/b8a73eb1-9d4b-4646-b904-29e55faa2102.jpeg',

  },
  {
    titleCard: "Cadenas de WhatsApp",
    shortSummary: "Mensajes falsos con promociones o regalos.",
    info1: "Te envían links o archivos maliciosos disfrazados de promociones. Las cadenas de WhatsApp suelen incluir enlaces o archivos maliciosos disfrazados de promociones, regalos o noticias interesantes. Estos enlaces y archivos están diseñados para capturar tu información confidencial o instalar malware en tu dispositivo. Los delincuentes utilizan técnicas de ingeniería social para hacer que estos mensajes parezcan legítimos y atractivos, lo que aumenta la probabilidad de que hagas clic en ellos.",
    info2: "No compartas cadenas sospechosas ni abras enlaces dudosos en mensajes masivos. Para proteger tu información, es importante no compartir cadenas sospechosas ni abrir enlaces dudosos en mensajes masivos. Si recibes un mensaje que parece sospechoso, no respondas ni hagas clic en ningún enlace. En su lugar, elimina el mensaje y considera informar a tus contactos sobre la posible estafa. Además, utiliza software de seguridad que pueda detectar y bloquear mensajes maliciosos.",
    imgSrc: 'https://pbs.twimg.com/media/FaTbBRfWIAUTmhe?format=jpg&name=small',

  },
  {
    titleCard: "Falsos Soportes Técnicos",
    shortSummary: "Estafas que ofrecen ayuda con problemas técnicos.",
    info1: "Te llaman o envían mensajes diciendo que tu cuenta o dispositivo tiene problemas. Los delincuentes se hacen pasar por empleados de soporte técnico de empresas legítimas y te llaman o envían mensajes informándote de problemas ficticios con tu cuenta o dispositivo. Utilizan tácticas de presión y urgencia para hacer que les proporciones acceso remoto a tu dispositivo o instales programas que realmente son usados para robar información.",
    info2: "Piden que instales programas que realmente son usados para robar información. Los delincuentes pueden pedirte que instales programas que supuestamente resolverán los problemas técnicos, pero en realidad están diseñados para robar tu información confidencial. Estos programas pueden incluir software de acceso remoto, herramientas de diagnóstico falsas o incluso malware. Es importante no instalar ningún programa a petición de soporte técnico no verificado. Si tienes dudas, cuelga y contacta directamente a la empresa utilizando un número de contacto verificado.",
    imgSrc: 'https://storage.googleapis.com/a1aa/image/de65ca33-0206-4748-977d-9f241d579bcc.jpeg',

  }
];

</script>

<style scoped></style>
