function InputBox({ placeholder = "Enter text", value, onchange,Icon,type="text" }) {
   return (
      <>
         <div className="flex justify-center items-center mt-4 mb-4 mx-8 bg-gray-700 bg-opacity-30 rounded-sm">
            {Icon && <Icon size={20} className="text-primarycolor mx-2" />}
            <input
               type={type}
               placeholder={placeholder}
               className="w-[85%] bg-transparent outline-none p-4 placeholder:text-primarycolor"
            />
         </div>
      </>
   );
}

export default InputBox;
