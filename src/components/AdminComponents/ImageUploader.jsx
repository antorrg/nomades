import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Crear una URL para previsualizar la imagen
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => setPreviewUrl(e.target.result);
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setPreviewUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    const token = localStorage.getItem('validToken')
    try {
      const response = await axios.post('/api/v1/imgupload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token':`${token}`
        }
      });
      setImageUrl(response.data.url);
      console.log('Imagen cargada. URL:', response.data.url);
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  };

  return (
    <div>
      <section>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {file && (
          <>
            <button type="button" onClick={handleDelete}>Borrar selección</button>
            {previewUrl && <img src={previewUrl} alt="Preview" style={{maxWidth: '200px', marginTop: '10px'}} />}
          </>
        )}
        <button onClick={handleSubmit} disabled={!file}>Subir</button>
      </section>
      {imageUrl && (
        <div>
          <p>Imagen cargada:</p>
          <img src={imageUrl} alt="Uploaded" style={{maxWidth: '20rem'}} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;