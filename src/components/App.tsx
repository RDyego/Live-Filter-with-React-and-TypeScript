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
            },
            {
                id: 3,
                title: "The Silmarillion",
                status: "Unavailable",
                requester: "Marilia",
                author: "J.R.R. Tolkien",
                image: "http://books.google.com.br/books/content?id=4OfWWfRDAXcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                id: 4,
                title: "Os filhos de Húrin",
                status: "Available",
                requester: "Nelson",
                author: "J.R.R. Tolkien",
                image: "http://books.google.com.br/books/content?id=j_MP5c095ZsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                id: 5,
                title: "E se?",
                status: "Available",
                requester: "Raphaell",
                author: "Randall Munroe",
                image: "https://books.google.com.br/books/content?id=-F0jBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73YbY5xZvOdMz4URYsn6I6V-gv8nQ4k1esYLD4vNZwvzcYwGJ2b9CBnUobMoWk3-ERPNWMDCkL69QAmyyQ_-yupV0pG7pxUBoNSSWpKIA9lGPWOs7ZSyHnwYlbrFZQiPMV-MhVm"
            }
        ];

        return new Promise((resolve) => setTimeout(() => resolve(items), 2000));
    }
}
