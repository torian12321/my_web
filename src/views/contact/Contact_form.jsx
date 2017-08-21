var
React     = require('react'),
PropTypes = require('prop-types'),
Input     = require('Input'),
Textarea  = require('Textarea'),
Button    = require('Button'),
{ Column }= require('Grid');

class Contact_form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			isValid: false,
			name   : '',
			email  : '',
			content: ''           
        };
    }
    updateName(name){
        this.setState({ name });
        this.validateForm();
    }
    updateEmail(email){
        this.setState({ email });
        this.validateForm();
    }
    updateContent(content){
        this.setState({ content });
        this.validateForm();
    }

    validateForm(){
        let isValid = false;
        if(
            this.state.name.trim()    == "" ||
            this.state.email.trim()   == "" ||
            this.state.content.trim() == ""
        ){
            isValid = false;
        }else{
            isValid = true;
        }
        this.setState({ isValid });
    }
    sendEmail_1(e){
        e.preventDefault();
        
        // console.log('sending mail');
        // var link = "mailto:aitorpalomares@gmail.com"
        // + "&subject=" + escape("This is my subject")
        // + "&body=" + this.state.content
        ;
        window.location.href = link;

    }

    sendEmail(e){
        e.preventDefault()

        fetch('/contactus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'contact@mail.com',
                email: 'aitorpalomares@gmail.com',
                body : 'Hello from react'
            // then continue this with the other inputs, such as email body, etc.
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success) {
                this.setState({formSent: true})
            } else this.setState({formSent: false})
        })
        .catch((error) => {
            console.error(error);
        });
    }


    render() {
        return (
            <Column xs={12} md={6} md_push={6}>
            <form
				onSubmit     = {false}
				autoComplete = "off">

				<Input    placeholder='Name'    onChange={ this.updateName.bind(this) } id='form-name' />
				<Input    placeholder="Email"   onChange={ this.updateEmail.bind(this) } />
				<Textarea placeholder="Content" onChange={ this.updateContent.bind(this) } className='formField_content' />
                <Button 
                    onClick  = { this.sendEmail.bind(this) }
                    className= "xs-12"
                    disabled = { !this.state.isValid }
                    >Send email
                </Button>
            </form>
            </Column>
        );
    }
}

module.exports = Contact_form;