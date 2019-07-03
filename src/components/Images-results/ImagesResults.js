import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImagesResults extends Component {

    state ={
        open: false,
        currentImg: ''
    }

    handleOpen = (img) => {
        this.setState({
            open: true,
            currentImg: img
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }
	render() {

        const getGridListCols = () => {
            if (isWidthUp('xl', this.props.width)) {
                return 3;
              }
          
              if (isWidthUp('lg', this.props.width)) {
                  console.log('coooooooooool');
                  
                return 3;
              }
          
              if (isWidthUp('md', this.props.width)) {
                return 2;
              }
              if (isWidthUp('xs', this.props.width)) {
                return 1;
              }
              return 2;
        }
		let imageLisatContent;
		const { images } = this.props;

		if (images) {
			imageLisatContent = (
                <GridList  cols={getGridListCols()}>
					{images.map((img) => (
						<GridTile
							title={img.tags}
							key={img.id}
							subtitle={
								<span>
									by <strong>{img.user}</strong>
								</span>
							}
							actionIcon={
								<IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
									<ZoomIn color="white" />
								</IconButton>
							}
						>
							<img src={img.largeImageURL} alt="" />
						</GridTile>
					))}
				</GridList>
			);
		} else {
			imageLisatContent = null;
        }

        const actions = [
            <FlatButton label="Close" primary={true} onClick={this.handleClose} />
        ]
		return (
            <div> 
                {imageLisatContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <img src={this.state.currentImg} style={{width: '100%'}} alt="" />
                </Dialog>
            </div>
        )
	}
}

export default withWidth()(ImagesResults);
