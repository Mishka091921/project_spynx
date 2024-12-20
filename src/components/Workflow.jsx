import { CheckCircle2 } from "lucide-react";
import { MinusCircle } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import myImage from '../assets/kspynx.png'

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        What's More?{" "}
        
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={myImage} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                {index == 0  || index == 1 || index ==2? 
                <CheckCircle2 />: 
                  <MinusCircle color="red"/>
                }
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md roadmap_text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
