import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from '../store';

describe('List Component', () => {
    it('renders without crashing', () => {
        const list = STORE.lists[0];
        const allCards = STORE.allCards;
        const div = document.createElement('div');
        ReactDOM.render(
            <List 
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => allCards[id])}
            />, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
    const list = STORE.lists[0];
    const allCards = STORE.allCards;
    const tree = renderer
        .create(<List
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => allCards[id])}
                />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
});
