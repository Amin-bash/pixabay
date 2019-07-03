import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Grid from '@material-ui/core/Grid';
// import Grid from '@'
// import Grid from 'material-ui/Grid'

import axios from 'axios';
import ImageResulte from '../Images-results/ImagesResults';

class Search extends Component {
	state = {
		searchText: '',
		amount: 15,
		apiUrl: 'https://pixabay.com/api',
		apiKey: '12932563-6235cbb87f1c27e3380cc90d3',
		images: []
	};

	onTextChange = (e) => {
        const val = e.target.value;
		this.setState(
			{
				[e.target.name]: val
			},
			() => {
                if(val==='') {
                    this.setState({images: []})
                } else {
                    axios
                        .get(
                            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state
                                .searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
                        )
                        .then((response) => this.setState({ images: response.data.hits }))
                        .catch((err) => console.log(err));
                }
			}
		);
	};

	onAmountChange = (e, index, value) => {
		this.setState({ amount: value });
	};

	render() {
		return (
			<div>
			<Grid container justify = "center">
				<Grid item lg={5} sm={6} xs={8}>
					<TextField
						name="searchText"
						value={this.state.searchText}
						onChange={this.onTextChange}
						floatingLabelText="Search For Images"
						fullWidth={true}
					/>
					<br />
					<SelectField
						name="amount"
						floatingLabelText="Frequency"
						value={this.state.amount}
						onChange={this.onAmountChange}
					>
						<MenuItem value={5} primaryText="5" />
						<MenuItem value={10} primaryText="10" />
						<MenuItem value={15} primaryText="15" />
						<MenuItem value={30} primaryText="30" />
					</SelectField>
					<br />
				</Grid>

				{this.state.images.length > 0 ? <ImageResulte images={this.state.images} /> : null}
			</Grid>
				</div>
		);
	}
}

export default Search;
