import React from 'react';
import LoginForm from 'schema-components/login-form';
import Jumbotron from 'ui-components/jumbotron';
import CenteringWrapper from 'ui-components/centering-wrapper';
import BackgroundWrapper from 'ui-components/background-wrapper';

const AuthScreen = () => {
	return (
		<BackgroundWrapper>
			<CenteringWrapper
				wrapWidth={'25%'}
				minWrapWidth={'280px'}
				wrapHeight={'100%'}
			>
				<Jumbotron />
				<LoginForm />
			</CenteringWrapper>
		</BackgroundWrapper>
	)
};

export default AuthScreen;