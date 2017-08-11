var
React            = require('react'),
PropTypes        = require('prop-types'),
Input            = require('Input'),

Test = require ('./test.jsx'),
Button           = require('Button'),
Contact_textArea = require('./Contact_textArea.jsx'),
Contact_input    = require('./Contact_input.jsx');

class Contact_form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			isValid: true,
			name   : 'name',
			email  : '',
			content: ''           
        };
    }
    change(){
    	console.log('changeee ' + this.state.name);
    }

    termChange(term){
        this.setState({
            content: term
        });

        console.log(this.state.name);
    }
    validateForm(){
        let valid = true;

        console.log('validating field');
        return valid;
    }
    sendEmail(e){
        e.preventDefault();
        if(this.validateForm()){
            console.log('sending mail');
        }
    }
    render() {
        return (
            <form
				className    = "xs-12 md-6 md-push-6"
				onSubmit     = "return preventDefault()"
				autoComplete = "off"
				name         = "mailForm">
<Test onChange={term => this.termChange(term)} />
<Input onChange={ this.change(this.state.name) }>{ this.state.name }</Input>



				<Contact_input id="name" onChange={ this.change.bind(this) }>Name</Contact_input>
				<Contact_input id="email">Email</Contact_input>
				<Contact_textArea id="content">Content</Contact_textArea>
                <Button 
                    onClick  = { this.sendEmail.bind(this) }
                    className= "xs-12"
                    disabled = { !this.state.isValid }
                    >Send email
                </Button>
            </form>
        );
    }
}

module.exports = Contact_form;