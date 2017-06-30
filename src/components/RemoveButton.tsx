import * as React from 'react';
import {observer} from 'mobx-react';
import {StoreState} from './StoreState';

const RemoveButton = observer(class RemoveButton extends React.Component {

    onRemoveButtonClick() {
        StoreState.decrement();
    }

    render() {
        return(
            <button onClick={this.onRemoveButtonClick}>-</button>
        );
    }

});

export default RemoveButton;