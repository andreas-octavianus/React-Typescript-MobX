import * as React from 'react';

import {StoreState} from './StoreState';
import {observer} from 'mobx-react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import './Hello.css';

const Hello = observer(class Hello extends React.Component {

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {StoreState.name + this.getExclamationMarks(StoreState.enthusiasmLevel)}
                </div>
                <div>
                    <AddButton/>
                    <RemoveButton/>
                </div>
            </div>
        );
    }

});

export default Hello;