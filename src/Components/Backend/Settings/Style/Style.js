import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
  PanelRow,
} from "@wordpress/components";
import { ColorsControl, Device, Label } from "../../../../../../bpl-tools/Components";
import { perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes,device }) => {
  const { colors ,width} = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });


console.log(width);
  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Purpose styles title", "b-blocks")}
        initialOpen={false}
      >
       <PanelRow>
       <Label>Width</Label>
       <Device></Device>
       </PanelRow>
       <UnitControl
       value={width[device]}
       onChange={val=>{
        setAttributes({width:updateData(width,val,device)})
       }}
       ></UnitControl>
      </PanelBody>
    </>
  );
};

export default Style;

