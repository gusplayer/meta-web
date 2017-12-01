<template>
  <div>

    <div class="uper_footer">
      <div class="uper_footer_content" >
       <a href="http://es.presidencia.gov.co/Paginas/presidencia.aspx" target="_blank">
        <img src="../assets/presidencia.png" >
       </a>
       <img src="../assets/99.jpg" >
       <img src="../assets/urna.png" >
       <img src="../assets/contraloria.png" >
       <img src="../assets/colciencias.jpg" >
       <img src="../assets/colombiacompra.png" >
       <img src="../assets/gobiernoenlinea.png" >
     </div>
    </div>

    <div>
      <div class="footer">
        <div class="footer_content">
           <div class="footer_politicas">
             <h5>Politicas</h5>
             <router-link to="/condiciones"><p>Condiciones de uso</p></router-link>
             <router-link to="/privacidad"><p>Privacidad de datos</p></router-link>
           </div>
           <div class="footer_ayuda">
             <h5>Ayuda</h5>
             <router-link to="/contacto"><p>Contacto</p></router-link>
             <router-link to="/soporte"><p>Soporte</p></router-link>
            <router-link to="/prensa"> <p>Noticias</p></router-link>
           </div>
           <div class="footer_popular">
              <h5>Accesibilidad</h5>
              <router-link to="/sitemap"><p>Mapa de sitio</p></router-link>
              <router-link to="/"><p>English version</p></router-link>
           </div>
           <div class="footer_contacto">
             <h5>Horarios</h5>
             <!-- <span class="footer_mail">oficinaatencionalciudadano@meta.gov.co</span>
             <span class="footer_mail">notificacionesjudiciales@meta.gov.co</span> -->
             <span class="footer_direccion">
- Entrada a visitantes lunes a viernes en días hábiles laborales de 8:00 am a 11.30 am y 2:00 pm a 5:30 pm.
<br>
- Oficina de atención al ciudadano lunes a viernes en días hábiles laborales 8 am a 12 m y 2 pm a 6 pm
<br><br>
- Oficina de Pasaportes lunes a viernes en días hábiles laborales de 7 am a 4 pm jornada continua
<br><br>
- Radicación de correspondencia lunes a viernes en días hábiles laborales 8 am a 11.30 am y 2 a 5:30 pm
 </span>
           </div>
           <div class="footer_siguenos">
             <h5>Siguenos</h5>
             <div class="footer_siguenos_icons">
               <a href="https://www.facebook.com/GobMeta/" target="_blank"><img src="../assets/facebook.svg" ></a>
               <a href="https://twitter.com/marcela_amayag" target="_blank"><img src="../assets/twitter.svg"></a>
             </div>
             <span class="footer_siguenos_pbx">PBX: (+57) 8 681 85 00 | Línea Gratuita: 01 8000 129 202
               <br><br>
               Dirección: Carrera 33 N° 38-45 Plaza Libertadores - Centro, Ed Gobernación
               <br><br>Villavicencio, Colombia.</span>

           </div>
       </div>
      </div>

      <div class="line">
        <p></p>
      </div>



      <div class="dark">
          <div class="light">
            <img class="light_img_foster" src="../assets/foster.png"  height="55px">
            <img class="light_img_lacharme"  src="../assets/lacharme.png"  height="26px">
            <img class="light_img_parque"  src="../assets/parque.png"  height="38px">
          </div>

          <div class="light copyright">

            <p>Desarrollado por
              <a href="http://fosterapps.com/" target="_blank">
                 FosterApps.com
              </a>
            </p>
            <p>
               - Copyright © Gobernación del Meta
            </p>
          </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.uper_footer{
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.26);
}
.uper_footer_content{
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap
}

.uper_footer_content img{
  height: 66px;
  width: auto;
}

.footer{
  width: 100%;
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
	font-size: 18px;
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
  font-size: 14px;
	color: #6487ab;
  line-height: 1.6;
  margin-top: 15px;
}
.footer_content{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 20px
}
.footer_politicas{
  max-width: 200px;
  width: 100%;
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
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin-right: 20px
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
	font-size: 14px;
	color: #6487ab;
  line-height: 1.6;
}
.line {
	width: 100%;
	height: 1.5px;
	background-color: #e4f1fd;
}
.subfooter {
	width: 100%;
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
  height:auto;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;

}
.light{
  color: gray;
  font-size: 14px;
	font-weight: 300;
	text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
@media screen and (max-width: 1100px) {
  .uper_footer{
    width: 100%;
    height: auto;
  }

  .uper_footer_content img{
    height: 50px;
    width: auto;
    margin: 10px;
  }
  .footer_content{
    flex-wrap: wrap;
  }
  .dark{
    flex-direction: row;
    margin-bottom: 20px
  }
  .light{
    margin: 0 auto;
  }

}
@media screen and (max-width: 500px) {
  .uper_footer{
    width: 100%;
    height: auto;
  }
  .uper_footer_content{
    width: auto;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;

  }
  .uper_footer_content img{
    margin: 5px;
    max-height: 40px;
    height: 100%;
    width: auto;
  }
  .footer_content{
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
  .footer_content div{
    margin: 10px;
    padding-left: 30px
  }
  .footer_siguenos div{
    padding-left: 0px;
    margin-left: 0px
  }
  .footer_mail{
    font-size: 13px;
  }
  .light{
    margin: 0 30px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    text-align: left;
  }
  .copyright{
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: flex-start;
  }

  .light_img_foster{
    height:38px;
  }
  .light_img_lacharme{
    height: 15px;
  }
  .light_img_parque{
    height: 42px;
  }


}
</style>
