<template>
  <div class="">
    <section class="py-12 font-poppins">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8 text-blue-600">Phishing en Dispositivos Móviles</h2>
        <p class="text-center mb-8">Descubra cómo los hackers utilizan aplicaciones maliciosas y otros métodos para realizar phishing en dispositivos móviles y cómo puede protegerse de estos ataques. Incluye ejemplos realistas y consejos prácticos.</p>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-mobile-alt mr-2 text-green-500"></i> ¿Qué es el Phishing en Dispositivos Móviles?
          </h3>
          <p>El phishing en dispositivos móviles es una técnica utilizada por los ciberdelincuentes para engañar a los usuarios y obtener información sensible, como nombres de usuario, contraseñas, números de tarjetas de crédito y otra información personal. Los atacantes se hacen pasar por entidades confiables, como bancos, empresas de tecnología o servicios en línea, para engañar a sus víctimas y hacer que revelen información confidencial.</p>
          <p>El phishing en dispositivos móviles puede llevarse a cabo a través de varios medios, siendo los más comunes las aplicaciones maliciosas (APKs), mensajes de texto (smishing) y correos electrónicos. Los atacantes pueden crear aplicaciones falsas que imitan aplicaciones legítimas para engañar a los usuarios y robar su información. También pueden enviar mensajes de texto o correos electrónicos con enlaces maliciosos que dirigen a los usuarios a sitios web falsos que imitan sitios legítimos.</p>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-exclamation-triangle mr-2 text-red-500"></i> Ejemplos de Phishing mediante Aplicaciones Maliciosas (APKs)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Phishing de BBVA</h4>
              <p>Descripción:</p>
              <p>Una aplicación falsa de BBVA que imita la interfaz de la aplicación legítima. Al iniciar sesión, la aplicación falsa roba sus credenciales de inicio de sesión y las envía a los atacantes.</p>
              <p>Cómo identificar:</p>
              <ul class="list-disc list-inside ml-4">
                <li>La aplicación no está disponible en la tienda oficial de aplicaciones (Google Play Store o Apple App Store).</li>
                <li>La aplicación solicita permisos innecesarios, como acceso a sus contactos o mensajes de texto.</li>
                <li>La aplicación tiene errores gramaticales o de diseño que no se encuentran en la aplicación legítima.</li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Phishing de WhatsApp</h4>
              <p>Descripción:</p>
              <p>Una aplicación falsa de WhatsApp que imita la interfaz de la aplicación legítima. Al iniciar sesión, la aplicación falsa roba sus credenciales de inicio de sesión y las envía a los atacantes.</p>
              <p>Cómo identificar:</p>
              <ul class="list-disc list-inside ml-4">
                <li>La aplicación no está disponible en la tienda oficial de aplicaciones (Google Play Store o Apple App Store).</li>
                <li>La aplicación solicita permisos innecesarios, como acceso a sus contactos o mensajes de texto.</li>
                <li>La aplicación tiene errores gramaticales o de diseño que no se encuentran en la aplicación legítima.</li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Phishing de Gmail</h4>
              <p>Descripción:</p>
              <p>Una aplicación falsa de Gmail que imita la interfaz de la aplicación legítima. Al iniciar sesión, la aplicación falsa roba sus credenciales de inicio de sesión y las envía a los atacantes.</p>
              <p>Cómo identificar:</p>
              <ul class="list-disc list-inside ml-4">
                <li>La aplicación no está disponible en la tienda oficial de aplicaciones (Google Play Store o Apple App Store).</li>
                <li>La aplicación solicita permisos innecesarios, como acceso a sus contactos o mensajes de texto.</li>
                <li>La aplicación tiene errores gramaticales o de diseño que no se encuentran en la aplicación legítima.</li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Phishing de PayPal</h4>
              <p>Descripción:</p>
              <p>Una aplicación falsa de PayPal que imita la interfaz de la aplicación legítima. Al iniciar sesión, la aplicación falsa roba sus credenciales de inicio de sesión y las envía a los atacantes.</p>
              <p>Cómo identificar:</p>
              <ul class="list-disc list-inside ml-4">
                <li>La aplicación no está disponible en la tienda oficial de aplicaciones (Google Play Store o Apple App Store).</li>
                <li>La aplicación solicita permisos innecesarios, como acceso a sus contactos o mensajes de texto.</li>
                <li>La aplicación tiene errores gramaticales o de diseño que no se encuentran en la aplicación legítima.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-mobile-alt mr-2 text-green-500"></i> Ejemplos de Phishing mediante Mensajes de Texto (Smishing)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Smishing de BBVA</h4>
              <p>Mensaje de texto:</p>
              <p>¡Alerta de Seguridad! Hemos detectado actividad sospechosa en su cuenta. Para verificar su cuenta, haga clic en el siguiente enlace: <a href="https://falsedominio.com/bbva" class="text-blue-500 underline">https://falsedominio.com/bbva</a></p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Smishing de Gmail</h4>
              <p>Mensaje de texto:</p>
              <p>¡Actualización de Seguridad Requerida! Hemos detectado un intento de acceso no autorizado a su cuenta. Para verificar su identidad, haga clic en el siguiente enlace: <a href="https://falsedominio.com/gmail" class="text-blue-500 underline">https://falsedominio.com/gmail</a></p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Smishing de PayPal</h4>
              <p>Mensaje de texto:</p>
              <p>¡Problema con su Cuenta PayPal! Hemos detectado un problema con su cuenta que requiere su atención inmediata. Para resolver el problema, haga clic en el siguiente enlace: <a href="https://falsedominio.com/paypal" class="text-blue-500 underline">https://falsedominio.com/paypal</a></p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">Ejemplo de Smishing de Amazon</h4>
              <p>Mensaje de texto:</p>
              <p>¡Confirmación de Pedido Requerida! Hemos detectado un problema con su último pedido. Para confirmar su pedido y evitar la cancelación, haga clic en el siguiente enlace: <a href="https://falsedominio.com/amazon" class="text-blue-500 underline">https://falsedominio.com/amazon</a></p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-shield-alt mr-2 text-yellow-500"></i> Cómo Protegerse del Phishing en Dispositivos Móviles
          </h3>
          <p>Para protegerse del phishing en dispositivos móviles, es importante tomar varias medidas de seguridad. Aquí tiene algunos consejos prácticos:</p>
          <ul class="list-disc list-inside ml-4">
            <li>Desconfíe de las aplicaciones no oficiales. Descargue aplicaciones solo desde tiendas oficiales como Google Play Store o Apple App Store.</li>
            <li>Verifique los permisos de las aplicaciones. Las aplicaciones legítimas no deberían solicitar permisos innecesarios, como acceso a sus contactos o mensajes de texto.</li>
            <li>Lea las reseñas y calificaciones de las aplicaciones antes de descargarlas. Las aplicaciones maliciosas a menudo tienen reseñas negativas o calificaciones bajas.</li>
            <li>Mantenga su sistema operativo y sus aplicaciones actualizados con las últimas actualizaciones de seguridad. Las actualizaciones de seguridad pueden corregir vulnerabilidades que los hackers pueden explotar para realizar ataques de phishing.</li>
            <li>Utilice software antivirus y antimalware para proteger su dispositivo de amenazas en línea. Estos programas pueden detectar y bloquear aplicaciones maliciosas y otros tipos de malware.</li>
            <li>Sea cauteloso con los mensajes de texto y correos electrónicos que recibe. No haga clic en enlaces sospechosos ni descargue archivos adjuntos de fuentes desconocidas.</li>
            <li>Utilice la autenticación de dos factores (2FA) para agregar una capa adicional de seguridad a sus cuentas en línea. La 2FA requiere una segunda forma de verificación, como un código enviado a su teléfono móvil, además de su contraseña.</li>
            <li>Eduque a sus familiares y amigos sobre los riesgos del phishing y las medidas que pueden tomar para protegerse. La seguridad en línea es una responsabilidad compartida y todos deben estar informados sobre cómo proteger su información personal.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-lightbulb mr-2 text-orange-500"></i> Ejemplos Prácticos de Protección
          </h3>
          <p>Aquí tiene algunos ejemplos prácticos de cómo puede protegerse del phishing en dispositivos móviles:</p>
          <ul class="list-disc list-inside ml-4">
            <li>Utilice una extensión de navegador como uBlock Origin o Privacy Badger para bloquear los enlaces maliciosos y los anuncios de phishing.</li>
            <li>Configure su navegador para bloquear las cookies de rastreo y los anuncios maliciosos. En Google Chrome, puede hacerlo yendo a Configuración > Privacidad y seguridad > Cookies y otros datos del sitio > Bloquear cookies de terceros.</li>
            <li>Utilice un software antivirus y antimalware como Norton, McAfee o Malwarebytes para proteger su dispositivo de amenazas en línea.</li>
            <li>Mantenga su sistema operativo y su navegador actualizados con las últimas actualizaciones de seguridad. En Windows, puede hacerlo yendo a Configuración > Actualización y seguridad > Windows Update.</li>
            <li>Sea cauteloso con los correos electrónicos y mensajes de texto que recibe. No haga clic en enlaces sospechosos ni descargue archivos adjuntos de fuentes desconocidas.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-info-circle mr-2 text-purple-500"></i> Consejos Adicionales
          </h3>
          <p>Aquí tiene algunos consejos adicionales para protegerse del phishing en dispositivos móviles:</p>
          <ul class="list-disc list-inside ml-4">
            <li>Utilice la navegación privada o el modo incógnito cuando visite sitios web sensibles, como sitios bancarios o de comercio electrónico. Esto puede ayudar a prevenir que las cookies de rastreo recopilen información sobre su comportamiento en línea.</li>
            <li>Revise regularmente las aplicaciones instaladas en su dispositivo y elimine cualquier aplicación sospechosa. En Android, puede hacerlo yendo a Configuración > Aplicaciones > Ver todas las aplicaciones.</li>
            <li>Utilice una red privada virtual (VPN) para encriptar su conexión a Internet y proteger su privacidad en línea. Esto puede ayudar a prevenir que los hackers intercepten sus cookies de sesión y otras informaciones sensibles.</li>
            <li>Eduque a sus familiares y amigos sobre los riesgos del phishing y las medidas que pueden tomar para protegerse. La seguridad en línea es una responsabilidad compartida y todos deben estar informados sobre cómo proteger su información personal.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-book mr-2 text-pink-500"></i> Recursos Adicionales
          </h3>
          <p>Aquí tiene algunos recursos adicionales que puede utilizar para protegerse del phishing en dispositivos móviles:</p>
          <ul class="list-disc list-inside ml-4">
            <li>Visite el sitio web de la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF) para obtener más información sobre cómo proteger su información personal y financiera en línea.</li>
            <li>Consulte las guías de seguridad de su navegador. Muchos navegadores, como Google Chrome, Mozilla Firefox y Microsoft Edge, ofrecen guías y recursos en línea para ayudar a sus usuarios a proteger su privacidad y seguridad en línea.</li>
            <li>Participe en talleres y seminarios sobre seguridad en línea. Muchas instituciones financieras y organizaciones sin fines de lucro en México ofrecen talleres y seminarios gratuitos sobre cómo proteger su información personal y financiera en línea.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
