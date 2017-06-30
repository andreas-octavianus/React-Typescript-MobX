import * as React from 'react';
import {observer} from 'mobx-react';
import {StoreState} from './StoreState';

const AddButton = observer(class AddButton extends React.Component {

    onAddButtonClick() {
        StoreState.increment();
    }

    render() {
        return(
            <button onClick={this.onAddButtonClick}>+</button>
        );
    }

});

export default AddButton;