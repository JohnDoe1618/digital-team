import { storage } from "@/main";

export default class FirebaseStorage {
    constructor() {
      this.storageRef = storage().ref();
      console.debug(
            '[DATA OF STORAGE] \n',
            `MAX operationTime: ${storage.maxOperationRetryTime}  \n`,
            `MAX uploadTime: ${storage.maxUploadRetryTime}  \n`,
        )
    }
  
    // Получить все файлы
    getAllFiles() {
      return this.storageRef.listAll();
    }
  
    // Записать новый файл
    uploadFile(file, fileName) {
      const fileRef = this.storageRef.child(fileName);
      return fileRef.put(file);
    }
  
    // Обновить файл
    updateFile(file, fileName) {
      const fileRef = this.storageRef.child(fileName);
      return fileRef.put(file);
    }
  
    // Удалить файл
    deleteFile(fileName) {
      const fileRef = this.storageRef.child(fileName);
      return fileRef.delete();
    }
  
    // Получить один файл
    getFile(fileName) {
      const fileRef = this.storageRef.child(fileName);
      return fileRef.getDownloadURL();
    }
  
    // Загрузить файл с % прогресса загрузки
    uploadFileWithProgress(file, fileName, progressCallback) {
      const fileRef = this.storageRef.child(fileName);
      const uploadTask = fileRef.put(file);
  
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progressCallback(progress);
        },
        (error) => {
          console.error("Error uploading file: ", error);
        }
      );
    }
  
    // Получить метаданные файла
    getFileMetadata(fileName) {
      const fileRef = this.storageRef.child(fileName);
      return fileRef.getMetadata();
    }
  }
  
// Пример использования
//   const firebaseStorage = new FirebaseStorage();
//   // Загрузка файла с прогрессом
//   firebaseStorage.uploadFileWithProgress(fileData, 'example.jpg', (progress) => {
//     console.log(`Upload is ${progress}% done`);
//   });
//   // Получить все файлы
//   firebaseStorage.getAllFiles()
//     .then((res) => {
//       res.items.forEach((item) => {
//         console.log('File:', item.name);
//       });
//     })
//     .catch((error) => {
//       console.error("Error getting files: ", error);
//     });