import React, { useState } from 'react';
import Card from 'ui-components/card';
import CenteringWrapper from 'ui-components/centering-wrapper';
import Spinner from 'ui-components/spinner';
import Button from 'ui-components/button';
import { Link } from 'react-router-dom';

const DashboardScreen = () => {
	const [ load, setLoad ] = useState(true);

	setTimeout(() => setLoad(false), 1000);

	if (load) return <Spinner />;

	return (
		<CenteringWrapper
			wrapWidth={'65%'}
			minWrapWidth={'300px'}
			wrapHeight={'100%'}
		>
			<Card>
				<CenteringWrapper wrapHeight={'400px'}>
					<CenteringWrapper>
						<h1>
							The magic has begun! You are successfully logged in.
						</h1>
					</CenteringWrapper>
					<CenteringWrapper>
						<h2>
							Such a nice magic trick, isn't it? Wanna see it again?
						</h2>
					</CenteringWrapper>
					<CenteringWrapper wrapHeight={'120px'}>
						<Link to={'/'}>
							<Button
								text={'go back'}
								size={'small'}
							/>
						</Link>
					</CenteringWrapper>
				</CenteringWrapper>
			</Card>
		</CenteringWrapper>

	);
};

export default DashboardScreen;