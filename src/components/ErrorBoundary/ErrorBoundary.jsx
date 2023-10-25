/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true,
        });
        console.error('Error from ErrorBoundary: ', error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>Упс. Ошибка, которая отловлена предохранителем</h1>
                </div>
            );
        }

        return this.props.children;
    }
}
