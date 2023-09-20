
//firebase upload 
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "./firebase";
const storage = getStorage(app);
// const upload = async (file) => {
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "test_preset");

    
//         try {
//           const res = await fetch("https://api.cloudinary.com/v1_1/nahiddhasan/image", {
//             method: "POST",
//             headers: { "Content-Type": "multipart/form-data" },
//             body: data,
//           });
      
//           const resData = await res.json();
//           return resData.url;
//         } catch (error) {
//           console.log(error)
//         }
  
//   };
 
const upload = (file)=>{
  const name = new Date().getTime() + file.name;
  const storageRef = ref(storage, name);


  const uploadTask = uploadBytesResumable(storageRef, file);
 
  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        // console.log('File available at', downloadURL);
        const  url = downloadURL;
          myfn(url);

      });
    }
    

  )
  const myfn=(url) => {
    const myurl = url;
    console.log(myurl)
    return myurl;
  }
}





export default upload



// const uploadImages = (files) => {
//   const promises = []
//   files.map((file) => {
//       console.log('loop');

//       const sotrageRef = ref(storage, `files/${file.name}`);

//       const uploadTask = uploadBytesResumable(sotrageRef, file);
//       promises.push(uploadTask)
//       uploadTask.on(
//           "state_changed",
//           (snapshot) => {
//               const prog = Math.round(
//                   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//               );
//              console.log(prog)
//           },
//           (error) => console.log(error),
//           async () => {
//               await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
//                   setURLs(prevState => [...prevState, downloadURLs])
//                   console.log("File available at", downloadURLs);
//               });
//           }
//       );


//   })
//   Promise.all(promises)
//       .then(() => alert('All images uploaded'))
//       .then(err => console.log(err))

// };

