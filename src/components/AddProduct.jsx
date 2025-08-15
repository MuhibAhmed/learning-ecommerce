import { useState } from "react";
import { Button } from "react-bootstrap";

function AddProduct({ products, setProducts }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  return (
    <div className="d-flex flex-column gap-2">
      Title :{" "}
      <input
        type="text"
        name="title"
        onChange={(event) => {
          setTitle(event.target.value); // setCount((current) => current + 1);
        }}
      />
      Description:{" "}
      <input
        type="text"
        name="desc"
        onChange={(event) => {
          setDesc(event.target.value);
        }}
      />
      Image Url:{" "}
      <input
        type="text"
        name="img_url"
        onChange={(event) => {
          setImg(event.target.value);
        }}
      />
      <Button
        className="mt-2"
        variant="primary"
        onClick={() => {
          console.log("Product Added", {
            title,
            desc,
            img,
          });

          setProducts([
            ...products,
            {
              title,
              desc,
              img,
            },
          ]);
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default AddProduct;
