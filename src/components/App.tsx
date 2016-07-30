import * as React from 'react';
import { Page } from './common/Page';


export class App extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.fetchItems().then(function(items:any) {
            this.setState({ items });
        }.bind(this));
    }

    render() {
        const { items } = this.state;

        return <Page title="Rent a book" items={items} />;
    }

    fetchItems() {
        const items = [
            {
                id: 1,
                title: "Dune",
                status: "Available",
                requester: "Raphaell",
                author: "Frank Herbert",
                image: "http://books.google.com.br/books/content?id=rXYdGATpigsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                id: 2,
                title: "Perdido em Marte",
                status: "Unavailable",
                requester: "Danilo",
                author: "Andy Weir",
                image: "http://books.google.com.br/books/content?id=KnamBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ];

        return new Promise((resolve) => setTimeout(() => resolve(items), 2000));
    }
}
