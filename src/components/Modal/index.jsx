var
React    = require('react'),
ReactDOM = require('react-dom'),
Modal    = require('./modal');


class ModalWrapper extends React.Component{
	componentDidMount() {
		this.modalTarget = document.createElement('div');
		//this.modalTarget.className = 'modal';
		document.body.appendChild(this.modalTarget);
		this._render();
	}
	componentDidUpdate() {
		this._render();	
	}
	componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild(this.modalTarget);
	}
	_render(){
		ReactDOM.render(
			<Modal {...this.props} />,
			this.modalTarget
		);
	}
	render(){
		return null;
		//return <noscript />;
	}
}

ModalWrapper.displayName = 'Modal';
module.exports = ModalWrapper;