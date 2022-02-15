import Image from "next/image";
function Imagecomponent(props) {
  return (
    <div>
      <Image
        className="rounded-lg"
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
export default Imagecomponent;
