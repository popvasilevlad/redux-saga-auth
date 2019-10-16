import styled from 'styled-components';

const BackgroundWrapper = styled.div`
	position: relative;
	height: 100%;
    width: 100%;
    &:after, &:before {
	 	content: '';
	 	height: 100%;
	    width: 100%;
    }
	&:before {
	    background-image: url('https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
	    position: fixed;
	    z-index: -1;
	    background-size: cover;
	    background-position: center center;
	    background-repeat: no-repeat;
	    opacity: 0.7;
	}
	&:after {
		position: absolute;
		top: 0;
		left: 0;
    	background: rgb(70,168,252);
		background: radial-gradient(circle, rgba(70,168,252,1) 0%, rgba(20,71,125,1) 100%);
		z-index: -2;
	}
`;

export default BackgroundWrapper;