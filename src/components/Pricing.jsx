import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Tokenomics{" "}
        
      </h2>
      <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="p-10 border text-center border-neutral-700 rounded-xl">
              FAIR LAUNCH
              <br/>
              100%
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="p-10 border text-center border-neutral-700 rounded-xl">
              TOTAL SUPPLY:
              <br/>
              400,000,000
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="p-10 border text-center border-neutral-700 rounded-xl">
              TOKEN PER MINT:
              <br/>
              10,000
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="p-10 border text-center border-neutral-700 rounded-xl">
              TOTAL MINTS:
              <br/>
              40,00
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;
