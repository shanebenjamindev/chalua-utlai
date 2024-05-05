import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uniqid from 'uniqid';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDm173y2MVu0W5n4_etsGQ2sG0ELiq3D0",
  authDomain: "food-ordering-422410.firebaseapp.com",
  projectId: "food-ordering-422410",
  storageBucket: "food-ordering-422410.appspot.com",
  messagingSenderId: "99557018162",
  appId: "1:99557018162:web:0aa3c8173494f404658a2b",
  measurementId: "G-P2HPCC213F"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function POST(req) {
  try {
    const data = await req.formData();

    if (data.get('file')) {
      // upload the file
      const file = data.get('file');

      const ext = file.name.split('.').slice(-1)[0];
      const newFileName = uniqid() + '.' + ext;

      const fileRef = ref(storage, newFileName);
      await uploadBytes(fileRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(fileRef);

      console.log('File uploaded successfully:', downloadURL);

      return Response.json(downloadURL);
    } else {
      throw new Error('File not found in request');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    return Response.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
