import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddBooks.css';

const AddBooks = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      BookName: data.BookName,
      WriterName: data.WriterName,
      imageURL: imageURL,
      Price: data.Price,
    };
    const url = `https://lit-cove-73709.herokuapp.com/addEvent`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((response) => console.log("server side response", response));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "7f04d54971b86eea98084cb12d667875");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Book Name" {...register("BookName")} className="book-name" />
        <input defaultValue="Writer Name" {...register("WriterName")} className="book-name" />
        <input defaultValue="Price" {...register("Price")} className="book-name" />
        <input type="file" onChange={handleImageUpload} className="file" />
        <input type="submit" value="Save" className="button"/>
      </form>
    </div>
  );
};

export default AddBooks;
