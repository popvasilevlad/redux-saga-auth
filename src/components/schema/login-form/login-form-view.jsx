import React, { useState } from 'react';
import Input from 'ui-components/input';
import Button from 'ui-components/button';
import Spinner from 'ui-components/spinner';
import ValidationError from 'ui-components/validation-error';
import CenteringWrapper from 'ui-components/centering-wrapper';
import { validateBeforeAuth } from 'utils';

const LoginForm = props => {
	const emailRef = React.createRef();
	const passRef = React.createRef();
	
	const [error, setError] = useState({});

	const handleSubmit = () => {
		const email = emailRef.current.value;
		const pass = passRef.current.value;

		const newError = validateBeforeAuth(email, pass);

		if (error) return setError(newError);

		console.log('should Submit')
	}


	return (
		<>
			<Input 
				size={'full'}
				placeholder={'E-mail address'}
				ref={emailRef}
				error={error.input === 'email'}
			/>
			<br/>
			<Input 
				size={'full'}
				placeholder={'Password'}
				type={'password'}
				ref={passRef}
				error={error.input === 'pass'}
				onSubmit={() => handleSubmit()}
			/>
			<CenteringWrapper wrapHeight={'50px'}>
				<ValidationError text={error.message} />
			</CenteringWrapper>
			<Button 
				size={'full'}
				text={'Log in'}
				handleClick={handleSubmit}
			>
				{/*<Spinner />*/}
			</Button>
		</>
	);
}

export default LoginForm;