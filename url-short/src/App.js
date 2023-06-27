function App() {

  const handlesubmit = () => {
    console.log()
  }

  return (
    <div className=" w-[100vw] h-[100vh] container mx-auto my-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold w-[70vw]">URL-SHORTNER</h1>
      <form className="flex flex-col my-10 bg-[#2d3748]" action={handlesubmit()}>
        <input
          type="text"
          className="border rounded p-2 w-[50vw]  text-white  bg-gray-700"
          placeholder="Enter your url"
        />
        <button type="submit" className="bg-gray-900 text-white font-semibold uppercase py-2 rounded  hover:bg-gray-700">
          Shrink
        </button>
      </form>
      <table class="w-[70vw] border border-gray-300">
        <thead>
          <tr>
            <th class="w-3/5 bg-gray-700 text-white border-r border-gray-300 py-2 px-4">
              Full-Url
            </th>
            <th class="w-2/5 bg-gray-700 text-white border-r border-gray-300 py-2 px-4">
              Short-Url
            </th>
            <th class="w-1/10 bg-gray-700 text-white py-2 px-4">Clicks</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td class="w-3/5 bg-gray-200 border-r border-gray-300 py-2 px-4 hover:bg-gray-100">
              Content 1
            </td>
            <td class="w-2/5 bg-gray-200 border-r border-gray-300 py-2 px-4 hover:bg-gray-100">
              Content 2
            </td>
            <td class="w-1/10 bg-gray-200 py-2 px-4 hover:bg-gray-100">Content 3</td>
          </tr>
        </tbody>
      </table>

      

    </div>
  );
}

export default App;
