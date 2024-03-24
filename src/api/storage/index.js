import { storage } from "@/main";
import { ref, list, uploadBytes, uploadBytesResumable, deleteObject, getDownloadURL, getMetadata } from "firebase/storage";

export default class FirebaseStorage {
    constructor() {
      console.debug(
            '[DATA OF STORAGE] \n',
            `MAX operationTime: ${storage.maxOperationRetryTime}  \n`,
            `MAX uploadTime: ${storage.maxUploadRetryTime}  \n`,
        )
    }
  
    // Получить все файлы
    async getAllFiles(limit, limit2) {
      // Create a reference under which you want to list
      const listRef = ref(storage, 'files/uid');

      // Fetch the first page of 100.
      const firstPage = await list(listRef, { maxResults: limit });

      // Use the result.
      // processItems(firstPage.items)
      // processPrefixes(firstPage.prefixes)

      // Fetch the second page if there are more elements.
      if (firstPage.nextPageToken) {
        const secondPage = await list(listRef, {
          maxResults: limit2,
          pageToken: firstPage.nextPageToken,
        });
        // processItems(secondPage.items)
        // processPrefixes(secondPage.prefixes)
        return secondPage
      }
    }
  
    // Записать новый файл
    uploadFile(file, fileName) {
      const metadata = {
        contentType: 'image/jpeg',
      };
      const localRef = ref(storage, fileName)
      uploadBytes(localRef, file, metadata).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
      });
    }

    controlUpload(file, fileName) {
      const metadata = {
        contentType: 'image/jpeg',
      };
      const localRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(localRef, file, metadata);

      // Pause the upload
      // uploadTask.pause();

      // Resume the upload
      // uploadTask.resume();

      // Cancel the upload
      // uploadTask.cancel();

      return uploadTask;
    }
  
    // Обновить файл
    // updateFile(file, fileName) {
      
    //   const fileRef = localRef.child(fileName);
    //   return fileRef.put(file);
    // }
  
    // Удалить файл
    deleteFile(fileName) {
      // example filename = 'images/desert.jpg' - fullpath will need in composing with folder
      const localRef = ref(storage, fileName);
      // Delete the file
      deleteObject(localRef).then(() => {
        // File deleted successfully
        return true;
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.error(error);
      });
    }
  
    // Получить один файл
    getFile(fileName) {
      let __URL__ = null;
      const localRef = ref(storage, fileName);
      getDownloadURL(localRef).then(url => {
        const __httpx__ = new XMLHttpRequest();
        __httpx__.responseType = 'blob';
        // __httpx__.onload = () => {
        //   const blob = __httpx__.response;
        // }
        __httpx__.open('GET', url)
        __httpx__.send();
        __URL__ = url
      })
      return __URL__;
    }
  
    // Загрузить файл с % прогресса загрузки
    uploadFileWithProgress(file, fileName, progressCallback, handler) {
      const fileRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(fileRef, file);
  
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progressCallback(Math.ceil(Number(progress)));
        },
        (error) => {
          console.error("Error uploading file: ", error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            handler(url, uploadTask.snapshot.ref)
          });
        }
      );
    }
  
    // Получить метаданные файла
    getFileMetadata(fileName) {
      let __metadata__ = null;
      const localRef = ref(storage, fileName);
      getMetadata(localRef).then(metadata => {
        __metadata__ = metadata;
      }).catch(e => console.error(e))
      return __metadata__;
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