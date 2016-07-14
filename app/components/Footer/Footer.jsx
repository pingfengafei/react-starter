import React, {Component, PropTypes} from 'react';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter);
            }}>
            {name}
            </a>
        );
    }

    renderUndo() {
        return (
            <p>
                <button onClick={this.props.onUndo} disabled={this.props.undoDisabled}>撤销</button>
                <button onClick={this.props.onRedo} disabled={this.props.redoDisabled}>前进</button>
            </p>
        );
    }

    render() {
        return (
            <div>
                <p>
                    Show:
                    {' '}
                    {this.renderFilter('SHOW_ALL', 'All')}
                    {', '}
                    {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                    {', '}
                    {this.renderFilter('SHOW_ACTIVE', 'Active')}
                    .
                </p>
                {this.renderUndo()}
            </div>
        );
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};