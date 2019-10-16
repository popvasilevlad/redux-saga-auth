import React, { useState } from 'react';
import Card from 'ui-components/card';
import CenteringWrapper from 'ui-components/centering-wrapper';
import Spinner from 'ui-components/spinner';

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
							The magic has begun!
						</h1>
					</CenteringWrapper>
					<CenteringWrapper>
						<h3>
							You are successfully logged in.
						</h3>
					</CenteringWrapper>
				</CenteringWrapper>
			</Card>

		</CenteringWrapper>

	);
};

export default DashboardScreen;