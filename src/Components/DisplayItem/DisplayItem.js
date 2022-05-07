import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DisplayItem = () => {
  const params = useParams();
  const [displayItem, setDisplayItem] = useState({});
  const navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDisplayItem(data));
  }, []);

  const { name, img, description, price, quantity, supplier } = displayItem;

  const handleManageItems = () => {
    navigate("/manageitems");
  };

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
            <div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Delivered
              </button>
              <div className="flex my-4">
                <input
                  type="text"
                  className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button className="ml-4 text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Add Stock
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleManageItems}
          className="block mx-auto border border-2 px-5 py-3 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
        >
          Manage Items
        </button>
      </section>
    </div>
  );
};

export default DisplayItem;
