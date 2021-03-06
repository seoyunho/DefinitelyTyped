import { Schema } from '@wordpress/api-fetch';
import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostTaxonomies {
    interface Props {
        children?: never;
        taxonomyWrapper?(content: ReactNode, taxonomy: Schema.Taxonomy<'edit'>): JSX.Element;
    }
}
declare const PostTaxonomies: ComponentType<PostTaxonomies.Props>;

export default PostTaxonomies;
