import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ConfirmComponent extends React.Component {
    constructor(props) {
        super(props);
        this.isVisible = true;
        this.onConfirm = this.onConfirm.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.onClose();
    }

    onConfirm() {
        this.props.onConfirm();
        this.onClose();
    }

    onCancel() {
        this.props.onCancel();
        this.onClose();
    }

    render() {
        return this.isVisible ? (
            <div className="ui-modal-root">
                <div className="ui-modal-wrapper">
                    <div className="ui-confirm">
                        <div className="ui-confirm-msg">{this.props.msg}</div>
                        <div className="ui-confirm-panel">
                            <a onClick={this.onConfirm}>确认</a>
                            <a onClick={this.onCancel}>取消</a>
                        </div>
                    </div>
                </div>
                <div className="ui-modal-overlay"></div>
            </div>
        ) : null;
    }

    componentDidCatch(error, info) {
        this.props.onError(error);
    }
}

const Confirm = msg => {
    return new Promise((resolve, reject) => {
        const container = document.createElement('div'),
            props = {
                msg,
                onConfirm: function() {
                    resolve(true);
                },
                onCancel: function() {
                    resolve(false);
                },
                onClose: function() {
                    ReactDOM.unmountComponentAtNode(container);
                    container.parentNode.removeChild(container);
                },
                onError: function(error) {
                    reject(error);
                }
            };
        document.body.appendChild(container);

        ReactDOM.render(
            React.createElement(ConfirmComponent, props),
            container
        );
    });
};

export default Confirm;
