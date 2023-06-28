import axios from "axios";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
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
    <div className=" w-full  container mx-auto  flex flex-col items-center justify-top border-2 border-black bg-[#5cdb95]">
      <h1 className="text-5xl font-bold mt-[10vw] ml-[0vw] w-[50vw] text-[#05386B] ">
        URL-SHORTNER
      </h1>
      <form className="flex flex-col my-10 bg-[#5cdb95">
        <input
          type="text"
          name="FullURL"
          className="rounded p-2 w-[50vw] h-[10vh] font-semibold text-[#05386B]  bg-[#379683]"
          placeholder="Enter your url here ..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handlesubmit}
          type="submit"
          className="bg-[#05386B] my-[2vh] ml-[0vw] w-[20vw] text-white font-semibold uppercase py-2 rounded  hover:bg-[#405365]"
        >
          Shrink
        </button>
      </form>
      <table className="table-fixed w-full ">
        <thead>
          <tr className="border-1 h-[2vh] text-2xl border-[#edf5e1]">
            <th className="w-3/5  word-wrap: break-word  bg-[#5cdb95] text-[#05386B]  border-2 border-[#edf5e1] py-2 px-4">
              Full-Url
            </th>
            <th className="w-2/6  bg-[#5cdb95] text-[#05386B]  border-2 border-[#edf5e1] py-2 px-4">
              Short-Url
            </th>
            <th ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr className=" h-[1vh]" key={index}>
              <td className=" word-wrap: break-word overflow-hidden bg-[#5cdb95] border-2 border-[#edf5e1] py-2 px-4 hover:bg-[#379683]">
                <a
                  className=" font-semibold text-[#edf5e1] hover:text-[#05386B] "
                  href={e.full}
                >
                  {e.full}
                </a>
              </td>
              <td className="  bg-[#5cdb95] border-2 border-[#edf5e1] py-2 px-4 hover:bg-[#379683]">
                <a
                  className="font-semibold text-[#edf5e1] hover:text-[#05386B] "
                  href={e.full}
                >
                  {e.short}
                </a>
              </td>
              <td>
                <button
                  className="bg-[#05386B] hover:bg-[#405365] mx-2  text-white  py-1 px-1 rounded"
                  onClick={() => handledelete(e)}
                >
                  <DeleteIcon />
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
