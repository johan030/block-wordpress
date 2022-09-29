import { useBlockProps, RichText} from '@wordpress/block-editor';


export default function save( {attributes} ) {

   
	const blockProps = useBlockProps.save();
	const {content, type} = attributes;

//blockProps.className += `${attributes.setAttributes.type}`
	return (
		
         
		<RichText.Content
			{ ...blockProps }

			className={"alert alert-dismissible alert-" + type}
			role="alert"
			tagName="div"
			multiline="p"
			value={ content }
			style={ { type:type } }
		/>
		
		
	
	)
}