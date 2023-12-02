export default function DropDown() {
  return (
    <>
      {/* component */}
      <div className="group relative inline-block">
        <button className="outline-none focus:outline-none border-2 border-gray-500 px-3 py-1 hover:bg-gray-300 bg-white rounded-lg flex items-center min-w-32">
          <span className="pr-1 font-normal flex-1">Pilih Urutan</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
  transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">Termurah</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">Termahal</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">Terdekat</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">Terjauh</li>
        </ul>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n",
        }}
      />
    </>
  );
}
