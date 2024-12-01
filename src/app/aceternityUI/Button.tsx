import { FaArrowRight, FaCheckCircle } from "react-icons/fa"; 

interface ButtonInterface {
  title: string;
  startIcon?: React.ReactNode;  
  endIcon?: React.ReactNode;   
  onClick?: () => void;         
}

const Button = (props: ButtonInterface) => {
  const { title, startIcon, endIcon, onClick } = props;

  return (
    <button
      onClick={onClick} 
      className={`
        py-2 px-4 text-sm   
        md:py-2 md:px-4 md:text-lg 
        lg:py-2 lg:px-6 lg:text-xl
        shadow-md hover:shadow-lg bg-[#fff] text-[#696969] rounded-xl font-light flex items-center justify-center space-x-2 transition duration-200 ease-linear
      `}
    >
 
      {startIcon && (
        <span className="text-xl">
          {startIcon}
        </span>
      )}

    
      <span>{title}</span>


      {endIcon && (
        <span className="text-xl">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
