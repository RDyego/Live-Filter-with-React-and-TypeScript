import * as React from 'react';
import { List } from './List';
import { Filter } from './Filter';
import { RowFluid } from './RowFluid';

interface IProps {
    items: any[],
    title: string
}

export class Page extends React.Component<IProps, any> {
    constructor(props: any){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    propsIncludes =
        (propName: string, value: string, obj: any):boolean => {
            return obj[propName].toLowerCase().trim().includes(value);
        }

    byAnyDataProperty =
        (searchTerm: string):any => {
            return (obj: any):boolean => {
                return this.propsIncludes('title', searchTerm, obj) ||
                    this.propsIncludes('author', searchTerm, obj) ||
                    this.propsIncludes('requester', searchTerm, obj);
            }
        }


    render() {

        const { title } = this.props;

        return (
            <div className="page">
                <h2>{title}</h2>
                <RowFluid>
                    <Filter onChangeTerm={(newSearchTerm) => this.updateSearchTerm(newSearchTerm)} />
                </RowFluid>
                <RowFluid>
                    {this.renderList()}
                </RowFluid>
            </div>
        );
    }

    renderList():any {
        if(this.isFetchingItems()){
            return "Loading items...";
        }

        if(this.isListEmpty()){
            return 'Nothing was found for this search term.';
        }

        return <List items={this.getItemsFiltered()} />
    }

    isFetchingItems() {
        return this.props.items.length === 0;
    }

    isListEmpty() {
        return this.getItemsFiltered().length === 0;
    }

    updateSearchTerm(newSearchTerm: string) {
        this.setState({ searchTerm: newSearchTerm });
    }

    getItemsFiltered() {
        let { searchTerm } = this.state;
        const { items } = this.props;
        searchTerm = searchTerm.toLowerCase().trim();
        return items.filter(this.byAnyDataProperty(searchTerm))
    }
}
