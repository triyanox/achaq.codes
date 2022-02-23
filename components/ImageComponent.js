import Image from "next/image";
function Imagecomponent(props) {
  return (
      <Image
        className="rounded-lg"
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
  );
}
export default Imagecomponent;
