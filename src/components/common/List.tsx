import * as React from 'react';
import { Item } from './Item';
import { IItem } from './../../models';

interface IProps {
    items: IItem[];
}

export class List extends React.Component<any, any>{
    render() {
        return <ul>{this.renderItems()}</ul>;
    }

    renderItems() {
        const {items} = this.props;
        return items.map( (item:IItem) =>
            <Item
                id={item.id}
                key={item.id}
                title={item.title}
                author={item.author}
                status={item.status}
                requester={item.requester}
                image={item.image}
            />
        );
    }
}
