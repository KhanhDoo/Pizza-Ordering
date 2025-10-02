export default function SectionHeader({subHeader,mainHeader}) {
    return (
        <div>
            <h3 className="uppercase text-gray-600 font-semibold leading-4" >
                    {subHeader}
                </h3>
                <h2 className="text-primary font-bold text-4xl italic mb-4">
                    {mainHeader}
                </h2>
        </div>
    );
}