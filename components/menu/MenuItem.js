import Image from "next/image";

export default function MenuItem({ }) {
    return (
        <div className="bg-gray-300 p-6 rounded-lg text-center flex flex-col items-center w-full max-w-sm">
                <Image src="/pizza.png" alt="pizza" 
                    width={200} height={300} className="w-max"/>
                    <h4 className="font-semibold text-xl my-2">
                        Pepperoni Pizza
                    </h4>
                    <p className="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="bg-primary text-white px-5 py-2 rounded-full mt-4">
                        Add to cart $12    
                    </button>        
        </div>
    );
}