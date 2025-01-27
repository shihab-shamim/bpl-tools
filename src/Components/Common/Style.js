import { getColorsCSS,getTypoCSS,getBackgroundCSS,getBorderCSS,getMultiShadowCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id,dynamicStyle ,device="desktop" }) => {
	const { colors,width,ImageType ,borders,shadow} = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksTestPurpose`;
	const typho=`${mainSl} p`;
	const div=`${mainSl} div`
	const backgroundStyle=`${mainSl} .backgroundStyle`
	const shadows=`${mainSl} .shadow`
	const allBorder=`${mainSl} .allBorder`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS('', dynamicStyle)?.googleFontLink}
        ${getTypoCSS(typho, dynamicStyle)?.styles}
		
	 
		${typho}{
			${getColorsCSS(colors)}
		}
			${div}{
			width:${width[device]};
			
			}


			${backgroundStyle}{
                ${getBackgroundCSS(ImageType)}
				
                }
			${allBorder}{
			${getBorderCSS(borders)}
			}


			${shadows}{
			 box-shadow : ${getMultiShadowCSS(shadow)};
			 height :400px;
			}


			@media only screen and (min-width:641px) and (max-width: 1024px){
			${div}{width:${width.tablet}}
			}
			@media only screen and (max-width: 641px){
			${div}{width:${width.mobile}}
	
			}

	`}} />;
}
export default Style;