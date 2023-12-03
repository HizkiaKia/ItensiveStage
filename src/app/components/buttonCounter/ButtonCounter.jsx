export default function ButtonCounter(){
    function decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
          'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        value--;
        target.value = value;
      }
    
      function increment(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
          'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        value++;
        target.value = value;
      }
    
      const decrementButtons = document.querySelectorAll(
        `button[data-action="decrement"]`
      );
    
      const incrementButtons = document.querySelectorAll(
        `button[data-action="increment"]`
      );
    
      decrementButtons.forEach(btn => {
        btn.addEventListener("click", decrement);
      });
    
      incrementButtons.forEach(btn => {
        btn.addEventListener("click", increment);
      });
    return (
       <>
       <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  input[type='number']::-webkit-inner-spin-button,\n  input[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  .custom-number-input input:focus {\n    outline: none !important;\n  }\n\n  .custom-number-input button:focus {\n    outline: none !important;\n  }\n"
  }}
/>

       <div className="custom-number-input h-10 w-32">
  <label
    htmlFor="custom-input-number"
    className="w-full text-gray-700 text-sm font-semibold"
  >
    Counter Input
  </label>
  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button
      data-action="decrement"
      className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
    >
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    <input
      type="number"
      className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
      name="custom-input-number"
      defaultValue={0}
    />
    <button
      data-action="increment"
      className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
    >
      <span className="m-auto text-2xl font-thin">+</span>
    </button>
  </div>
</div>

       </>
    )
}