import Image from "next/image";
import  Right  from "../icons/Right";

export default function Hero() { 
    return (
        <section className="hero mt-4" >
            <div className="py-12">
                <h1 className="text-4xl font-semibold leading-normal">
                    Everything<br />
                    is better<br />
                    with a&nbsp;
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className=" text-gray-500 text-sm my-6">
                    Experience the best pizza in town with our delicious and freshly made pies. Order now and satisfy your cravings!
                </p>
                <div className="flex items-center gap-4">
                    <button className="bg-primary uppercase items-center flex gap-2 text-white 
                    px-4 py-2 rounded-full">
                        Order Now
                        <Right />
                    </button>
                    <button className="flex gap-2 border-0 text-gray-600 font-semibold">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            
            <div className="relative">
                <Image src="/pizza.png" alt="pizza"
                layout={'fill'} objectFit={"contain"} />
            </div>
        </section>
    );
}