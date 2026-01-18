const Contact = () => {
  return (
    <div className="w-8/12 mx-auto  p-4">
      <h1 className="font-bold text-2xl mt-10">Contact Page </h1>{" "}
      <div className="h-min w-full border rounded-md shadow-sm mt-6 p-6">
        <form
          className="flex flex-col"
          action="mailto:ajinkyaashokghate@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            name="Name"
            className="border border-black p-2 m-2 w-1/2"
            placeholder="Name"
          />
          <textarea
            type="text"
            name="Message"
            className="border border-black p-2 m-2"
            placeholder="Message"
          />
          <button className="border w-1/4 border-black p-2 m-2 hover:bg-orange-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
