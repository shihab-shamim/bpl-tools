import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType,ImageType,titleColor,header,shadow,border,borders} = attributes;
  const imageStyle = ImageType?.type === "solid"
  ? { backgroundColor: ImageType?.color || "#000000b3" }
  : ImageType?.type === "gradient"
  ? { background: ImageType?.gradient || "linear-gradient(135deg, #4527a4, #8344c5)" }
  : ImageType?.type === "image"
  ? {
        backgroundImage: `url(${ImageType?.image?.url || ""})`,
        backgroundPosition: ImageType?.position || "center center",
        backgroundAttachment: ImageType?.attachment || "initial",
        backgroundRepeat: ImageType?.repeat || "no-repeat",
        backgroundSize: ImageType?.size || "cover",
        backgroundColor: ImageType?.overlayColor || "transparent",
    }
  : {};
  const getFontSize = () => {
    // Adjust this logic based on your application's requirements
    const width = window.innerWidth;
    if (width >= 1024) return header.fontSize.desktop;
    if (width >= 768) return header.fontSize.tab;
    return header.fontSize.mobile;
  };

  const dynamicStyle = {
    fontFamily: header.fontFamily,
    fontWeight: header.fontWeight,
    fontSize: getFontSize(),
    lineHeight: header.lineHeight ,
    textDecoration: header.textDecoration ,
    textTransform: header.textTransform ,
    fontStyle: header.fontStyle ,
    letterSpacing: header.letterSpacing 
  }  
  const boxShadowValue = shadow
  .map(
    ({ hOffset, vOffset, blur, spreed, color, isInset }) =>
      `${isInset ? 'inset ' : ''}${hOffset} ${vOffset} ${blur} ${spreed} ${color}`
  )
  .join(', ');

  const borderstyle = {
    border: `${border?.width} ${border?.style} ${border?.color}`
  };
//  sf;kldfjgdf;df;df;df;df;df;df;df;df;df;df;jklg
const setBorderSide = (borders) => {
  let borderStyle = {
    width: borders.width || "2px",
    style: borders.style || "dotted",
    color: borders.color || "#ff0000",
    borderRadius: borders.radius || "5px",
  };

  switch (borders.side) {
    case 'top':
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'right':
      borderStyle.borderRight = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'bottom':
      borderStyle.borderBottom = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'left':
      borderStyle.borderLeft = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'topRight':
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderRight = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'topBottom':
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderBottom = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'topLeft':
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderLeft = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'topRightBottom':
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderRight = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderBottom = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'topRightLeft':
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderRight = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderLeft = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'topBottomLeft':
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderBottom = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderLeft = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'rightBottom':
      borderStyle.borderRight = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderBottom = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'rightLeft':
      borderStyle.borderRight = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderLeft = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'rightBottomLeft':
      borderStyle.borderRight = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderBottom = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderLeft = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    case 'bottomLeft':
      borderStyle.borderBottom = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      borderStyle.borderLeft = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
    default:
      borderStyle.borderTop = `${borderStyle.width} ${borderStyle.style} ${borderStyle.color}`;
      break;
  }

  return borderStyle;
}
const dynamicBorderStyle = setBorderSide(borders);
console.log(dynamicBorderStyle);

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div style={{display:"flex", justifyContent:"center",}}  className="bBlocksTestPurpose">
        <div style={{textAlign:"center",minHeight:"400px",display:"flex",alignItems:"center",width:"80%",justifyContent:"center",...imageStyle,color:titleColor}} >
        hello
      </div>
                    
        </div>
        <div>
        <p style={{dynamicStyle,boxShadow:boxShadowValue}}>Proactively productivate exceptional web-readiness through top-line internal or  sources. Intrinsicly.</p>
        </div>
        <div style={{ ...borderstyle,height:border?.height}}>
          <h1>Hello World</h1>
        </div>
        <div style={{minWidth:"500px",minHeight:"300px", marginTop:"20px",...dynamicBorderStyle,display:"flex",justifyContent:"center", alignItems:"center",color:"red"} }>
          Custom Border
        </div>
      </div>


     
    </>
  );
};
export default Edit;
