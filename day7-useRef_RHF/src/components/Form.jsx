import React, { useRef, useState } from "react";

const Form = () => {
  const [formDaa, setFormDaa] = useState({});
  let imgRef = useRef();
  let priceRef = useRef();
  let catRef = useRef();
  let nameRef = useRef();
  // Used to store ref of the element

  let formRef = useRef({});

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef)
  };

  return (
    <div className="w-80">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded bg-white flex flex-col gap-4"
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select category</span>
        <select
          ref={(e) => (formRef.current.cat = e)}
          className="p-2 border border-gray-400 rounded"
          name=""
          id=""
        >
          <option value="Mens">Mens</option>
          <option value="Women">Womens</option>
          <option value="Kids">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.img = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />

        <button className="p-2 bg-blue-600 text-white rounded">CREATE</button>
      </form>
    </div>
  );
};

export default Form;
