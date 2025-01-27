import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-bpl-tools');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<div>
        <p className="lorem" >lorem Conveniently revolutionize customized convergence and high-quality ROI. Authoritatively facilitate robust interfaces.</p>
        </div>
      
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});