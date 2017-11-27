<template>
  <section id="documentos">

    <el-dialog title="Editar carpeta" :size="sizeDialog" v-if="currentFolderEdit" :visible.sync="dialogEditFolder">
      <el-input placeholder="Cambiar nombre" v-model="currentFolderEdit.nombre"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" v-on:click="deleteFolder" icon="delete">Eliminar</el-button>
        <el-button v-on:click="editFolder">Guardar información</el-button>
      </span>
    </el-dialog>

    <el-dialog :size="sizeDialog" :visible.sync="dialogDeleteFile">
      <span>Estas seguro de eliminar el archivo?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="text" @click="dialogDeleteFile = false">Cancelar</el-button>
        <el-button type="primary" @click="deleteFile">Eliminar</el-button>
      </span>
    </el-dialog>

    <el-dialog title="Ingresar Contraseña" :visible.sync="getPassword" class="getPassword" :size="sizeDialog">
      <el-input type="password" placeholder="Contraseña" v-model="currentPassword"></el-input>
      <el-button type="primary" v-on:click="getFiles">Validar</el-button>
    </el-dialog>

    <el-dialog title="Ingresar Contraseña" :visible.sync="getPasswordFile" class="getPassword" :size="sizeDialog">
      <el-input type="password" placeholder="Contraseña" v-model="currentPassword"></el-input>
      <el-button type="primary" v-on:click="getContentFile">Validar</el-button>
    </el-dialog>

    <el-dialog v-if="allow()" title="Crear Carpeta" :visible.sync="createFolderDialog" class="createFolder_dialog" :size="sizeDialog">
      <el-input placeholder="Nombre de la carpeta" v-model="newFolderName"></el-input>
      <el-input type="password" placeholder="Contraseña de la carpeta" v-model="newFolderPassword"></el-input>
      <el-button type="primary" v-on:click="newFolder">Crear carpeta</el-button>
    </el-dialog>

    <el-dialog v-if="allow()" v-loading.body="createFileLoadingDialog" title="Subir Archivo" :visible.sync="uploadFileDialog" class="uploadFile_dialog" :size="sizeDialog">
      <div class="uploaderPhoto">
        <input type="file" v-on:change="uploadFile" multiple>
        <span>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Arrastra archivo aqui o <em>click para subir</em></div>
        </span>
        <div class="el-upload__tip" slot="tip" v-show="!newFile">peso maximo de 10Mb</div>
      </div>
      <span class="fileUploaded" v-if="newFile"><i class="el-icon-document"></i><p>{{ newFile.name }}</p><i class="el-icon-upload-success el-icon-circle-check"></i></span>
      <el-input placeholder="Nombre del archivo" v-model="newFileName"></el-input>
      <el-input placeholder="Descripción del archivo" v-model="newFileDesc"></el-input>
      <el-input placeholder="Contraseña del archivo" v-model="newFilePassword"></el-input>
      <div>
        <el-button type="text" v-on:click="uploadFileDialog = false">Cancelar</el-button>
        <el-button type="primary" >Crear Archivo</el-button>
      </div>
    </el-dialog>
    <div class="documents">
      <div class="documents_header">
        <div class="documents_header_intro">
          <h1 class="documents_header_intro_title">Centro de Documentos</h1>
          <p class="documents_header_intro_desc">Podras encontrar todos los documentos que buscas de la Gobernacion del Meta, realmente rapido gracias a una excelente interfaz de busqueda y organización de archivos.</p>
        </div>
        <div class="documents_header_photo">
          <img src="../assets/aplication1.png" alt="">
        </div>
        <p class="mobile_warning"><strong>Porfavor para visualizar este contenido desde una pantalla mas grande</strong></p>
      </div>
      <div class="documents_title">
        <div class="documents_title_top">
          <h2>Documentos</h2>
          <p>Organiza y encuentra tus archivos</p>
        </div>
        <hr>
      </div>
      <div id="columns" class="documents_columns">
        <div class="documents__column" v-for="(column, index) in columns">
          <draggable v-model="columns[index]" :move="checkMove" @end="sendOrder(index)">
              <template v-for="item in column">
                <div v-if="!item.archivo" :id="`folder${item.id}`" :class="`folder column${index}`" v-on:click="validateGetFiles($event, item, index)">
                  <i class="material-icons">folder_open</i>
                  <p>{{item.nombre}}</p>
                  <i class="material-icons folder_options" v-if="allow()" v-on:click="gialogOptions(item)">more_vert</i>
                </div>
                <div v-else class="file" :id="`file${item.id}`" v-on:click="validateGetContentFile($event, item)">
                  <i class="material-icons">insert_drive_file</i>
                  <p>{{item.nombre}}</p>
                  <i class="material-icons file_delete" v-if="allow()" v-on:click="dialogDelete(item.id)">delete_forever</i>
                </div>
              </template>
          </draggable>
          <div class="documents_actions">
            <button v-if="allow()" type="button" class="documents__action createFolder" v-on:click="beforeNewFolder(column, index)"><i class="material-icons">add</i>Crear Carpeta</button>
            <button v-if="allow() && index != 0" type="button" class="documents__action uploadFile" v-on:click="beforeUploadFile(column, index)" ><i class="material-icons">cloud_upload</i>Subir Archivo<input type="file" v-on:change="uploadFile" multiple></button>
          </div>
        </div>
        <div v-if="waitContent" class="documents__column documents__column_loader" v-loading.body="true">
        </div>
      </div>
    </div>
    <a id='dwnldLnk' :download='this.currentFile.nombre' style="display:none;" />
  </section>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  created(){
    if(this.$store.state.foldersData){
      this.getFirstColumn(this.$store.state.foldersData);
    }
  },
  data(){
    return {
      columns: [],
      newArray: [],
      newFolderName: '',
      newFolderPassword: '',
      newFolderId: '',
      getPassword: false,
      getPasswordFile: false,
      createFolderDialog: false,
      uploadFileDialog: false,
      currentPassword: '',
      currentFolder: null,
      currentIndex: 0,
      columnFolderSelected: 0,
      waitContent: true,
      nameCurrentDownloadFile: '',
      currentFile: '',
      newFile: null,
      newFileName: '',
      newFileDesc: '',
      newFilePassword: '',
      createFileLoadingDialog: false,
      dialogDeleteFile: false,
      dialogEditFolder: false,
      currentIdFileDelete: 0,
      currentFolderEdit: null,
      currentPushData: 0,
    }
  },
  watch: {
    foldersData(value){
      this.getFirstColumn(value);
    }
  },
  computed: {
    sizeDialog(){
      const mq = window.matchMedia( "(max-width: 600px)" );
      if (mq.matches) {
        return 'full'
      } else {
        return 'small'
      }
    },
    currentUser(){
      return this.$store.state.currentUser;
    },
    foldersData() {
      return this.$store.state.foldersData;
    }
  },
  methods: {
    sendOrder(index){
      let result = this.columns[index].map((folder) => {
        if(folder.orden){
          return folder.id
        }
      });
      let json = {
        carpetas: result,
      }
      axios.post('https://intranet.meta.gov.co/carpeta/ordenar', json).then((response) => {
      })
    },
    checkMove: function(evt){
      if(evt.dragged.classList[0] == 'file'){
        return false;
      }
      setTimeout(()=>{
        if(this.currentFolder){
          this.selectedItem(this.currentFolder, this.currentIndex);
        }
      }, 500)
    },
    validateGetFiles(e, folder, index){
      if(e.target.classList[1] != 'folder_options'){
        if(!this.waitContent){
          this.selectedItem(folder, index)
          this.getPassword = false;
          if(!folder.es_privado){
            this.waitContent = true;
            this.getFiles();
          }else{
            this.getPassword = true;
          }
        }
      }
    },
    getFiles(){
      let json = {
        id: this.currentFolder.id,
        contrasena: this.currentPassword,
      }
      this.currentPassword = '';
      if(this.currentIndex+1){
        this.columns = this.columns.slice(0, this.currentIndex + 1)
      }
      axios.post('https://intranet.meta.gov.co/carpeta/ver', json).then((response) => {
        let newColumn = response.data.data.subcarpetas.concat(response.data.data.archivos);
        this.columns.push(newColumn);
        this.waitContent = false;
        this.getPassword = false;
      })
    },
    validateGetContentFile(e, file){
      if(e.target.classList[1] != 'file_delete'){
        this.currentFile = file;
        if(!file.es_privado){
          this.getContentFile();
        }else{
          this.getPasswordFile = true;
        }
      }
    },
    getContentFile(){
      let json = {
        id: this.currentFile.id,
        contrasena: this.currentPassword
      }
      this.currentPassword = '';
      axios.post('https://intranet.meta.gov.co/archivo', json, { responseType: 'arraybuffer' }).then((response) => {
        let image = btoa(
          new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        let base64 = `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
            var dlnk = document.getElementById('dwnldLnk');
            dlnk.href = base64;
            dlnk.click();
        this.getPasswordFile = false;
      })
    },
    getFirstColumn(value){
      if(this.columns.length == 0){
        this.waitContent = false;
        this.columns.push(value);
      }
    },
    deleteFolder(){
      axios.delete(`https://intranet.meta.gov.co/carpetas/${this.currentFolderEdit.id}`).then((response) => {
        document.getElementById(`folder${this.currentFolderEdit.id}`).style.display = "none";
        this.dialogEditFolder = false;
      })
    },
    selectedItem(folder, index){
      this.currentFolder = folder;
      this.currentIndex = index;
      for(let folder of document.querySelectorAll(`.column${index}`)){
        folder.classList.remove('selected');
      }
      document.getElementById(`folder${folder.id}`).classList.add('selected');
    },
    showSubfolders(obj){
      this.subfolder = obj;
    },
    beforeNewFolder(folderId = false, index){
      this.currentPushData = index;
      if(folderId != false){
        this.newFolderId = folderId[0].parent_id || folderId[0].carpetas_id;
      }else{
        this.newFolderId = this.currentFolder.id;
      }
      this.createFolderDialog = true;
    },
    newFolder(){
      let json = {
        nombre: this.newFolderName,
        estado: 1,
        privada: (this.newFolderPassword == '') ? 0 : 1,
        carpeta: this.newFolderId,
        contrasena: this.newFolderPassword
      }
      axios.post('https://intranet.meta.gov.co/carpetas', json).then((response) => {
        this.newFolderName = '';
        this.newFolderPassword = '';
        this.createFolderDialog = false;
        this.columns[this.currentPushData].push(response.data.data);
        setTimeout(() => {
          document.getElementById('columns').scrollLeft = document.getElementById('columns').scrollWidth;
        }, 100)
      }).catch((error) => {
        this.createFolderDialog = false;
      })
    },
    beforeUploadFile(folderId = false, index){
      this.currentPushData = index;
      if(folderId != false){
        this.newFolderId = folderId[0].parent_id || folderId[0].carpetas_id;
      }else{
        this.newFolderId = this.currentFolder.id;
      }
    },
    uploadFile(file){
      for (var i = 0; i < file.target.files.length; i++) {
        const isLt30M = file.target.files[i].size / 1024 / 1024 < 30;
        if(isLt30M){
          const config = { headers: { 'Content-Type': 'multipart/form-data' } };
          let newFile = new FormData();
          newFile.append('carpeta', this.newFolderId)
          newFile.append('archivo', file.target.files[i])
          newFile.append('nombre', file.target.files[i].name)
          newFile.append('estado', 1)
          newFile.append('privado', 0)
          axios.post('https://intranet.meta.gov.co/archivos', newFile, config).then((response) => {
            this.columns[this.currentPushData].push(response.data.data);
          }).catch((error) =>{
            this.$message.error('El archivo no subio al servidor, vuelve a intentarlo');
          })
        }else{
          this.$message.error('El archivo debe pesar menos de 30 Megabyte');
        }
      }
    },
    gialogOptions(folder){
      this.currentFolderEdit = folder;
      this.dialogEditFolder = true;
    },
    editFolder(){
      let json = {
        nombre: this.currentFolderEdit.nombre,
        id: this.currentFolderEdit.id,
        estado: 1,
        carpeta: this.currentFolderEdit.parent_id,
      }
      axios.post('https://intranet.meta.gov.co/carpetas/editar', json).then((response) => {
        this.dialogEditFolder = false;
      })
    },
    dialogDelete(id){
      this.currentIdFileDelete = id;
      this.dialogDeleteFile = true;
    },
    deleteFile(){
      axios.delete(`https://intranet.meta.gov.co/archivos/${this.currentIdFileDelete}`).then((response) => {
        document.getElementById(`file${this.currentIdFileDelete}`).style.display = "none";
        this.dialogDeleteFile = false;
      })
    },
    allow(value = 0){
      if(this.currentUser.tipoUsuario == 1){
        return true;
      }else{
        if(this.currentUser.tipoUsuario == 2){
          switch (value) {
            case 1:
              return false;
            break;
            default:
              return true;
          }
        }else{
          switch (value) {
            case 2:
              return true;
            break;
            default:
              return false;
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  .createFolder_dialog, .getPassword{
      z-index: 9999999999 !important;
  }
  .createFolder_dialog .el-input{
    margin: 5px 0;
  }
  .getPassword .el-input{
    margin: 10px 0;
  }
  .el_dialog{
    max-width: 200px;
    width: 100%;
  }
  .uploadFile_dialog .el-input{
    margin: 5px 0px;
  }
  .uploadFile_dialog .uploaderPhoto{
    margin: 5px 0px;
  }
  .uploaderPhoto{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .uploaderPhoto input{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .uploaderPhoto span{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 60px;
    border: 1px dashed #97a8be;
    border-radius: 6px;
  }
  .uploaderPhoto input:hover{
    border: 1px dashed #4192ec;
  }
  .uploaderPhoto span i{
    font-size: 60px;
    color: #97a8be;
  }
  .uploaderPhoto span .el-upload__text{
    font-size: 14px;
    color: #97a8be;
  }
  .uploaderPhoto span .el-upload__text em{
    color: #4192ec;
  }
  .fileUploaded{
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
  }
  .fileUploaded .el-icon-document{
    color: #677384;
  }
  .fileUploaded p{
    color: #677384;
    margin: 0 10px;
  }
  .fileUploaded .el-icon-upload-success{
    color: rgba(0, 157, 61, 0.7);
  }
  .documents{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .documents_header{
    width: 100%;
    height: 330px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(101deg, rgba(223, 228, 230, 0), rgba(193, 201, 209, 0.53));
    box-shadow: 2px 2px 7px 0 rgba(155, 155, 155, 0.2);
  }
  .documents_header_photo{
    display: flex;
    align-items: center;
  }
  .documents_header_intro{
    max-width: 400px;
    width: 98%;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .mobile_warning{
    display: none;
    margin: 10px;
  }
  .documents_header_intro_title{
    font-size: 30px;
    font-weight: 500;
    color: #4a4a4a;
    margin-bottom: 20px;
  }
  .documents_header_intro_desc{
    font-size: 14px;
    letter-spacing: -0.2px;
    color: #4a4a4a;
  }
  .documents_title{
    max-width: 1200px;
    width: 95%;
    margin: 20px 0;
  }
  .documents_title_top{
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .documents_title_top h2{
    margin-right: 10px;
    color: #393939;
    font-size: 20px;
  }
  .documents_title_top p{
    font-size: 13px;
    color: #898989;
  }
  .documents_title hr{
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid rgba(151, 151, 151, 0.37);
    margin: 10px 0;
    padding: 0;
  }
  .documents_actions{
    width: 100%;
    display: flex;
    justify-content: center;
    flex: none;
    margin: 10px 0;
  }
  .documents__action{
    display: flex;
    align-items: center;
    border-style: none;
    margin: 0 7px;
    cursor: pointer;
  }
  .documents__action.createFolder{
    border-radius: 6px;
    background-color: #5ca840;
    color: #FFF;
    padding: 5px 10px;
  }
  .documents__action.createFolder i{
    margin-right: 5px;
    color: #FFF;
  }
  .documents__action.uploadFile{
    position: relative;
    background-color: transparent;
    border-radius: 6px;
    border: solid 1px #4a4a4a;
    padding: 5px 10px;
    color: #4a4a4a;
  }
  .documents__action.uploadFile > input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .documents__action.uploadFile i{
    margin-right: 5px;
    color: #4a4a4a;
  }
  .documents_columns{
    width: 100%;
    display: flex;
    overflow-x: auto;
  }
  .documents_columns::-webkit-scrollbar{
    height: 8px;
    background-color: transparent;
  }
  .documents_columns::-webkit-scrollbar-thumb{
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
    background-color: #c6c6c6;
  }
  .documents__column{
    max-width: 390px;
    min-width: 390px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 10px 0;
    background-color: #FFF;
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.48);
  }
  .documents__column > div:first-child::-webkit-scrollbar{
    width: 8px;
    background-color: transparent;
  }
  .documents__column > div:first-child::-webkit-scrollbar-thumb{
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
    background-color: #c6c6c6;
  }
  .documents__column > div:first-child{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }
  .documents__column .folder{
    width: 90%;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    margin: 5px 0;
    border-radius: 5px;
    border: solid 1px #e9eff4;
    cursor: pointer;
    color: #323c47;
    background-color: #FFF;
    transition: .3s;
  }
  .documents__column .folder i:first-child{
    color: #e0eefd;
    text-shadow: 0 0 1px #4da1ff;
  }
  .documents__column .folder i:last-child{
    color: rgba(208, 215, 221, 0.73);
  }
  .documents__column .folder.selected{
    background-color: #4da1ff;
  }
  .documents__column .folder p{
    text-align: center;
    font-size: 13px;
    word-break: break-all;
    margin: 0 5px;
  }
  .documents__column .folder.selected p, .documents__column .folder.selected i{
    color: #FFF;
    text-shadow: 0 0 0 #FFF;
  }
  .documents__column .file{
    width: 90%;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    margin: 5px 0;
    border-radius: 5px;
    border: solid 1px #e9eff4;
    cursor: pointer;
    color: #323c47;
    background-color: #FFF;
    transition: .3s;
  }
  .documents__column .file i:first-child{
    color: #e0eefd;
    text-shadow: 0 0 1px #4da1ff;
  }
  .documents__column .file i:last-child{
    color: rgba(208, 215, 221, 0.73);
  }
  .documents__column .file.selected{
    background-color: #4da1ff;
  }
  .documents__column .file p{
    text-align: center;
    font-size: 13px;
    word-break: break-all;
    margin: 0 5px;
  }
  .documents__column .file.selected p, .documents__column .file.selected i{
    color: #FFF;
    text-shadow: 0 0 0 #FFF;
  }
  .documents__column_loader{
    z-index: 500;
  }
  .el-loading-mask{
    z-index: 500 !important;
  }
  @media(max-width: 800px){
    .documents_header{
      position: absolute;
      height: calc(100vh - 60px);
      flex-flow: column wrap;
      justify-content: center;
      background-image: linear-gradient(101deg, rgba(223, 228, 230, 1), rgba(193, 201, 209, 1));
    }
    .mobile_warning{
      display: block;
    }
  }
</style>
