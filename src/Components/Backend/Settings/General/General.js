import { __ } from "@wordpress/i18n";

import { PanelBody, SelectControl } from "@wordpress/components";
import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { ColorControl } from "../../../../../../bpl-tools/Components/ColorControl/ColorControl";
import {
  Background,
  BButtonGroup,
  BoxControl,
  BtnGroup,
  ColorsControl,
  CustomCodeEditor,
  SelectPureControl,
  SeparatorControl,
  ShadowControl,
  SortableControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import {
  BDevice,
  BorderControl,
} from "../../../../../../bpl-tools/Components/Deprecated";
// import { ShadowControl } from "../../../../../../bpl-tools/Components/Deprecated";

const General = ({ attributes, setAttributes }) => {
  const {
    purposeType,
    titleColor,
    desColor,
    ImageType,
    position,
    buttonText,
    header,
    names,
    shadow,
    border,
    selected,
    devices,
    borders,
  } = attributes;

  // const borderDefaults = {
  //   width: "2px",
  //   style: "dotted",
  //   color: "#ff0000",
  //   side: "top",
  //   radius: "5px",
  // };


  const optionsData = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];


  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Purpose", "b-blocks")}
      initialOpen={false}
    >
      <SelectControl
        label={__("Purpose", "b-blocks")}
        labelPosition="left"
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) =>
          setAttributes({ purposeType: updateData(purposeType, v) })
        }
      />
      {/* 111111111111111 */}
      <ColorControl
        value={titleColor}
        label={"Title Color:"}
        onChange={(value) => setAttributes({ titleColor: value })}
        defaultColor={"#008000"}
        disableAlpha={true}
      ></ColorControl>
      {/* 2222222222222222222222 */}
      <ColorsControl
        label={__("Description Colors")}
        value={desColor}
        onChange={(val) => setAttributes({ desColor: val })}
      ></ColorsControl>

      {/* 22222222222222222222222222222222 */}
      <Background
        value={ImageType}
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "ImageType");
          setAttributes(updatedAttributes);
        }}
      />
      {/* 33333333333333333333333333333333333333333333333333333333 */}
      <BButtonGroup
        options={[
          { label: "Shihab", value: "shihab" },
          { label: "Shamim", value: "shamim" },
          { label: "Mondol", value: "mondol" },
        ]}
        onChange={(val) => console.log(val)}
      />
      {/* 444444444444444444444444444444444 */}
      <BoxControl
        label="Margin"
        values={position}
        onChange={(newValues) => {
          setAttributes({ position: newValues });
        }}
        // resetValues={{ top: '0px', right: '0px', bottom: '0px', left: '0px' }}
        // units={[{ label: 'px', value: 'px' }, { label: '%', value: '%' }]}
        // sides={['top', 'right', 'bottom', 'left']}
        // style={{ margin: '20px' }}
        // className="custom-box-control"
        // disableUnits={false}
      />

      {/* 44444444444444444444444444444444 */}
      <BtnGroup
        value={buttonText}
        options={[
          { label: "Hello", value: "Hello" },
          { label: "World", value: "World" },
        ]}
        label="Hello Button"
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "buttonText");
          setAttributes(updatedAttributes);
        }}
      ></BtnGroup>
      {/* 555555555555555555555555555555555555 */}

      {/* <CustomCodeEditor
onChange={(value)=>setAttributes({edit:value})}

/> */}

      {/* 6666666666666666666 */}
      <Typography
        value={header}
        // onChange={newValue => console.log(newValue)}
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "header");
          setAttributes(updatedAttributes);
        }}
      />
      {/* 7777777777777 */}

      <SortableControl
        value={names}
        property="name"
        onChange={(newOrder) => {
          const updatedAttributes = updateData(attributes, newOrder, "names");
          setAttributes(updatedAttributes);
        }}
      />

      {/* <ShadowControl value={shadow} onChange={(value)=>{
  const updatedAttributes=updateData(attributes,value,"shadow")
  setAttributes(updatedAttributes)
 // console.log(value);
}}/>
   */}
      {/* 88888888888888888 */}
      <ShadowControl
        value={shadow}
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "shadow");
          setAttributes(updatedAttributes);
        }}
      />

      {/* 999999999999999 */}

      <SeparatorControl
        value={border}
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "border");
          setAttributes(updatedAttributes);
        }}
      />

      {/* 10000000000000 */}
      <SelectPureControl
        value={selected}
        label="Select Pure Control"
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "selected");
          setAttributes(updatedAttributes);
        }}
        options={optionsData}
      />

      {/* 1111111111111111111111 */}
      <BDevice
        device={devices}
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "devices");
          setAttributes(updatedAttributes);
          console.log();
        }}
      />
      {/* 12222222 */}

      <BorderControl
        value={borders}
        onChange={(value) => {
          const updatedAttributes = updateData(attributes, value, "borders");
          setAttributes(updatedAttributes);
        }}
      />
    </PanelBody>
  );
};

export default General;
