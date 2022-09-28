import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes, setAttributes } ) {
    const blockProps = useBlockProps.save();

    return <div className={attributes.class}>{ attributes.message }</div>;
}