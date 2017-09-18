<template>
  <div>

    <div class="uper_footer">
      <div class="uper_footer_content" >
       <img src="../assets/presidencia.png" height="66px">
       <img src="../assets/99.jpg" height="66px">
       <img src="../assets/contraloria.png" height="66px">
       <img src="../assets/colciencias.jpg" height="66px">
       <img src="../assets/colombiacompra.png" height="66px">
       <img src="../assets/gobiernoenlinea.png" height="66px">
     </div>
    </div>

    <div>
      <div class="footer">
        <div class="footer_content">
           <div class="footer_politicas">
             <h5>Politicas</h5>
             <p>Condiciones de uso</p>
             <p>Privacidad de datos</p>
           </div>
           <div class="footer_ayuda">
             <h5>Ayuda</h5>
             <p>Contacto</p>
             <p>Soporte</p>
             <p>Noticias</p>
           </div>
           <div class="footer_popular">
              <h5>Popular</h5>
              <p>Prensa</p>
              <p>Galerias</p>
              <p>Documentos</p>
           </div>
           <div class="footer_contacto">
             <h5>Contacto</h5>
             <span class="footer_mail">oficinaatencionalciudadano@meta.gov.co</span>
             <span class="footer_mail">notificacionesjudiciales@meta.gov.co</span>
             <span class="footer_direccion">Dirección: Carrera 33 N° 38-45 Plaza Libertadores - Centro, Ed Gobernación -
Horario de Atención al Público: Lunes a Viernes: 8:00 a.m. - 11:30 a.m. y 2:00 p.m. - 5:30 </span>
           </div>
           <div class="footer_siguenos">
             <h5>Siguenos</h5>
             <div class="footer_siguenos_icons">
               <img src="../assets/facebook.png">
               <img width="30px" src="../assets/google+.png">
               <img src="../assets/twitter.png">
               <img src="../assets/instagram.png">
             </div>
             <span class="footer_siguenos_pbx">PBX: (+57) 8 681 85 00 | Línea Gratuita: 01 8000 129 202
               <br><br>Villavicencio, Colombia.</span>


           </div>
       </div>
      </div>

      <div class="line">
        <p></p>
      </div>

      <div class="subfooter">
        <div class="subfooter_content">
          <div class="subfooter_content_left">
            <router-link to="/inicio">Inicio </router-link>
            <router-link to="/transparencia">Gobernación </router-link>
            <router-link to="/transparencia">Prensa </router-link>
            <router-link to="/transparencia">Transparencia </router-link>
            <router-link to="/prensa">Prensa </router-link>
          </div>
          <div class="subfooter_content_right"><p>Copyright © Gobernación del Meta, 2017</p></div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>


.uper_footer{
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.26);
}
.uper_footer_content{
  width: 1200px;
  display: flex;
  justify-content: space-between;
}

.footer{
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 65px 0;
}
.footer p{
  font-size: 16px;
	letter-spacing: 0.2px;
	color: #4a4a4a;
}
.footer h5{
  font-weight: 300;
	font-size: 24px;
	letter-spacing: 0.2px;
	color: #4f6983;
  margin-bottom: 10px;
}
.footer_mail{
  font-size: 16px;
	letter-spacing: 0.2px;
	color: #128f2e;
  line-height: 35px;
}
.footer_direccion{
  font-size: 16px;
	color: #6487ab;
  line-height: 1.6;
  margin-top: 15px;
}
.footer_content{
  width: 1200px;
  display: flex;
  justify-content: space-around;
}
.footer_politicas{
  width: 200px;
  line-height: 35px;
}
.footer_ayuda{
  width: 200px;
  line-height: 35px;
}
.footer_popular{
  width: 200px;
  line-height: 35px;
}
.footer_contacto{
  width: 350px;
  display: flex;
  flex-direction: column;
}
.footer_siguenos{
  width: 250px;
}
.footer_siguenos_icons{
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 52px;
  margin-top: 20px
}
.footer_siguenos_pbx{
  width: 236px;
	height: 88px;
	font-size: 16px;
	color: #6487ab;
  line-height: 1.6;
}
.line {
	width: 100vw;
	height: 1px;
	background-color: #e4f1fd;
}
.subfooter {
	width: 100vw;
	height: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.subfooter_content{
	width: 1200px;
	height: 55px;
  padding: 0 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.subfooter_content_left{
 width: 520px;
 display: flex;
 justify-content: space-around;
 font-size: 16px;
 color: #6487ab;
}
.subfooter_content_left a{
 font-size: 16px;
 color: #6487ab;
}
.subfooter_content_right{
  font-size: 16px;
	font-weight: bold;
	text-align: right;
	color: #6487ab;

}
</style>
