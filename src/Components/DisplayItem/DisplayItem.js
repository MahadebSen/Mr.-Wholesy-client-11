import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisplayItem = () => {
  const params = useParams();
  const [displayItem, setDisplayItem] = useState({});
  const id = params.id;

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDisplayItem(data));
  }, []);

  const { name, img, description, price, quantity, supplier } = displayItem;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-xl"
              alt=""
              src={img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {name}
            </h1>
            <p className="mb-4 leading-relaxed">{description}</p>
            <p className="text-lg font-semibold">
              Price: <span className="font-normal">${price}</span>
            </p>
            <p className="text-lg font-semibold my-2">
              Quantity: <span className="font-normal">{quantity}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Supplier Name: <span className="font-normal">{supplier}</span>
            </p>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayItem;
