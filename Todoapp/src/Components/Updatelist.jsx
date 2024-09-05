import React from "react";

 export const Updatelist = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex flex-col bg-slate-700 p-10 gap-8">
          <form>
            <div className="flex flex-col md:flex-row md:justify-between gap-8 justify-start ">
              <div className="flex flex-col gap-3 w-full md:w-6/12 ">
                <label className="text-3xl font-bold" htmlFor="">
                  Updated Title:
                </label>
                <input
                  className="p-2 border bg-white outline-none text-gray-700 md:p-4 md:text-2xl  "
                  type="text"
                  placeholder="whats the title of your todo"
                  name="Title"
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-6/12">
                <label className="font-bold text-3xl" htmlFor="">
                New   Description:
                </label>
                <input
                  className="p-2 bg-white w-full  outline-none text-gray-700 md:p-4 md:text-2xl"
                  type="text"
                  placeholder="whats the title of your todo"
                  name="Description"
                />
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  className="bg-green-500 flex items-center text-white p-4 font-bold text-2xl px-6 mr-14"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatelist;
