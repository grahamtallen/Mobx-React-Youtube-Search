/**
 * Created by grahamallen on 6/25/16.
 */
import React from 'react';
import Sortable from 'react-sortablejs';
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore'

// Functional Component
const SortableList = observer(({ items, onChange }) => {
    let sortable = null; // sortable instance

    const listItems = items.map((val, key) => (<li key={key} data-id={val}>List Item: {val}</li>));

    return (
        <div>
            <button type="button" onClick={CsStore.reverseOrder}>Reverse Order</button>
            <Sortable
                // Sortable options (https://github.com/RubaXa/Sortable#options)
                options={{
                }}

                // [Optional] Use ref to get the sortable instance
                // https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute
                ref={(c) => {
                    if (c) {
                        sortable = c.sortable;
                    }
                }}

                // [Optional] A tag to specify the wrapping element. Defaults to "div".
                tag="ul"

                // [Optional] The onChange method allows you to implement a controlled component and keep
                // DOM nodes untouched. You have to change state to re-render the component.
                // @param {Array} order An ordered array of items defined by the `data-id` attribute.
                // @param {Object} sortable The sortable instance.
                onChange={(order, sortable) => {
                    onChange(order);
                }}
            >
                {listItems}
            </Sortable>
        </div>
    );
});

SortableList.propTypes = {
    items: React.PropTypes.array,
    onChange: React.PropTypes.func
};

export default SortableList;