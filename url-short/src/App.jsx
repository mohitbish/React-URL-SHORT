import axios from "axios";
import { useState, useEffect } from "react";
const submitroute = "http://localhost:8888/submitroute";
const getdataroute = "http://localhost:8888/getdata";
const deleteroute = "http://localhost:8888/delete";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handledelete = async (e) => {
    const response = await axios.post(deleteroute, {
      data: e.short,
    });
    console.log(e.short);
  };

  const handlesubmit = async () => {
    try {
      const response = await axios.post(submitroute, {
        data: inputValue,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(getdataroute);
        const receivedData = response.data;
        setData(receivedData);
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, [data]);

  return (
    <div className=" w-[100vw] h-[100vh] container mx-auto my-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold w-[80vw]">URL-SHORTNER</h1>
      <form className="flex flex-col my-10 bg-[#2d3748]">
        <input
          type="text"
          name="FullURL"
          className="border rounded p-2 w-[40vw]  text-white  bg-gray-700"
          placeholder="Enter your url"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handlesubmit}
          type="submit"
          className="bg-gray-900 text-white font-semibold uppercase py-2 rounded  hover:bg-gray-700"
        >
          Shrink
        </button>
      </form>
      <table className="max-w-[80vw]">
        <thead>
          <tr>
            <th className="w-3/5 bg-gray-700 text-white border-r border-gray-300 py-2 px-4">
              Full-Url
            </th>
            <th className="w-2/5 bg-gray-700 text-white border-r border-gray-300 py-2 px-4">
              Short-Url
            </th>
            <th ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr className="w-[70vw]" key={index}>
              <td className=" max-w-3/5 bg-gray-200 border-r border-gray-300 py-2 px-4 hover:bg-gray-100">
                <a className=" hover:text-sky-400 " href={e.full}>
                  {e.full}
                </a>
              </td>
              <td className="w-2/5 bg-gray-200 border-r border-gray-300 py-2 px-4 hover:bg-gray-100">
                <a className=" hover:text-sky-400 " href={e.full}>
                  {e.short}
                </a>
              </td>
              <td >
                <button
                  className="bg-gray-700 hover:bg-gray-200 font-semibold ml-2 text-white  py-2 px-4 rounded"
                  onClick={() => handledelete(e)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
