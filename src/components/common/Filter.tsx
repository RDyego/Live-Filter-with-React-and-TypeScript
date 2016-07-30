import * as React from 'react';

interface IProps {
    onChangeTerm: (term: string) => void
}

export class Filter extends React.Component<IProps, any> {
    render() {
        return (
            <div className="control-group fieldcontain">
                <div className="controls">
                    <input type="text" placeholder="Search" onChange={this.handleChange} />
                </div>
            </div>
        );
    }

    handleChange = (event: any): void => {
        this.props.onChangeTerm(event.currentTarget.value);
    }
}
