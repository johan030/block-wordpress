import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText,BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton,} from "@wordpress/components";
import "./editor.scss";


export default function Edit(attributes) {
    const {
		attributes: { content,type },
		setAttributes,
	} = attributes;

const blockattributes = useBlockProps();
	
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}
    
    const onChangeType = (newType) => {
		setAttributes({type : newType });
	};

	return (
		<>

			<BlockControls>
    
    <ToolbarGroup>
        <ToolbarButton
            icon="thumbs-up"
            label={ __( 'advice', 'bootstrapblock' )  }
            className='green'
            onClick={ () => attributes.setAttributes( { type:'success' } ) }
            //isPressed={ () => attributes.setAttributes( { type:'success' } ) }
        />

        <ToolbarButton
            icon="warning"
            label={ __( 'Warning', 'bootstrapblock' )  }
            className='yellow'
            onClick={ () => attributes.setAttributes( { type:'warning' } ) }
            //isPressed={ () => attributes.setAttributes( { type:'warning' } ) }
        />

        <ToolbarButton
            icon="dismiss"
            label={ __( 'Avoid', 'bootstrapblock' )  }
            className='red'
            onClick={ () => attributes.setAttributes( { type:'avoid' } ) }
            //isPressed={ () => attributes.setAttributes( { type:'avoid' } ) }
        />
    </ToolbarGroup>
</BlockControls>
<RichText
					{ ...blockattributes }
					tagName="div" 
					multiline="p" 
					onChange={ onChangeContent }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					value={ content }
					placeholder={ __( 'Entrez votre message.' ) }
					className={"alertContent alert alert-" + type}
				/>
		</>
	);
    <ToolbarButton
    onClick={ () => attributes.setAttributes({type: 'advice'})}
    />
}

