import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../components/Filters/SortBy';
import FilterBar from '../components/Filters/FilterBar';
import * as type from '../components/Content/ContentCards/constants/cardConstants';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import SearchBox from '../components/Filters/SearchBox';
import data from '../data/cardTempData/webisodes.json';
import WebisodeBoard from '../components/Content/ContentBoards/ContentBoard';

export class Webisodes extends Component {
	render() {
		const style = {
			textAlign: 'center',
			width: '104%',
		};

		return (
			<Fragment>
				<div>
					<Helmet>
						<title>Our National Conversation | Webisodes</title>
					</Helmet>

					<Container className="container" fluid>
						<br />
						<Row>
							<Col md={3}>
								<SearchBox pageName="Webisodes" />
							</Col>
							<Col md={6}>
								<SortBy
									pageName="Webisodes"
									pageTitle="WEBISODES"
									horizLineTextLeft="Newly Arrived"
								/>
								<br />
							</Col>
							<Col md={3}></Col>
						</Row>

						<Row>
							<Col md={3}>
								<FilterBar />
							</Col>
							<Col md={6}>
								<div
									style={{
										width: '111%',
										marginLeft: '-35px',
										marginTop: '-35px',
									}}
								>
									<WebisodeBoard type={type.WEBISODE} data={data} />
								</div>
								<br />
								<div style={style}>
									<GlobalButton
										className="global-btn"
										padding="7px 55px"
										fontWeight="700"
										label="SEE MORE WEBISODES"
									/>
								</div>
							</Col>
							<Col md={3}>
								<div className="rail-group" style={{ marginTop: '-88px' }}>
									<RailButtons />
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default Webisodes;
