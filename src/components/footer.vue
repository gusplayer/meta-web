<template>
  <div>

    <div class="uper_footer">
      <div class="uper_footer_content" >
       <a href="http://es.presidencia.gov.co/Paginas/presidencia.aspx" target="_blank">
        <img src="../assets/presidencia.png" height="66px">
       </a>
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
             <router-link to="/"><p>Condiciones de uso</p></router-link>
             <router-link to="/"><p>Privacidad de datos</p></router-link>
           </div>
           <div class="footer_ayuda">
             <h5>Ayuda</h5>
             <router-link to="/"><p>Contacto</p></router-link>
             <router-link to="/"><p>Soporte</p></router-link>
            <router-link to="/"> <p>Noticias</p></router-link>
           </div>
           <div class="footer_popular">
              <h5>Accesibilidad</h5>
              <router-link to="/"><p>Mapa de sitio</p></router-link>
              <router-link to="/"><p>English version</p></router-link>
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
               <a href="https://www.facebook.com/GobMeta/" target="_blank"><img src="../assets/facebook.svg" ></a>
               <a href="https://twitter.com/marcela_amayag" target="_blank"><img src="../assets/twitter.svg"></a>
             </div>
             <span class="footer_siguenos_pbx">PBX: (+57) 8 681 85 00 | Línea Gratuita: 01 8000 129 202
               <br><br>Villavicencio, Colombia.</span>

           </div>
       </div>
      </div>

      <div class="line">
        <p></p>
      </div>





      <div class="dark">
          <div class="light">
            <img src="../assets/foster.png"  height="55px">
            <img src="../assets/lacharme.png"  height="26px">
            <img src="../assets/parque.png"  height="38px">
          </div>

          <div class="light">

            <p>Desarrollado por
              <a href="http://fosterapps.com/" target="_blank">
                 FosterApps.com
              </a>
              - Copyright © Gobernación del Meta
            </p>
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
  font-size: 15px;
	letter-spacing: 0.2px;
	color: #4a4a4a;
}
.footer h5{
  font-weight: 300;
	font-size: 20px;
	letter-spacing: 0.2px;
	color: #4f6983;
  margin-bottom: 10px;
}
.footer_mail{
  font-size: 15px;
	letter-spacing: 0.2px;
	color: #128f2e;
  line-height: 35px;
}
.footer_direccion{
  font-size: 15px;
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
  width: 170px;
  line-height: 35px;
}
.footer_popular{
  width: 200px;
  line-height: 35px;
}
.footer_contacto{
  width: 370px;
  display: flex;
  flex-direction: column;
}
.footer_siguenos{
  width: 250px;
}
.footer_siguenos_icons{
  width: 60%;
  display: flex;
  justify-content:  flex-start;
  margin-bottom: 52px;
  margin-top: 20px;
}
.footer_siguenos_icons img{
  margin-right: 20px
}
.footer_siguenos_pbx{
  width: 236px;
	height: 88px;
	font-size: 15px;
	color: #6487ab;
  line-height: 1.6;
}
.line {
	width: 100vw;
	height: 1.5px;
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
	font-weight: 300;
	text-align: right;
	color: #6487ab;
}
.dark{
  max-width: 1200px;
  width: 100%;
  height:70px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin: 0 auto;

}
.light{
  color: gray;
  font-size: 15px;
	font-weight: 300;
	text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
}
.light a{
  color: gray;
  font-weight: 600;
}
.light img{
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    margin-right: 25px
}
</style>
