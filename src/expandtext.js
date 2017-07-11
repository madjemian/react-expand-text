import React from 'react';

class ExpandText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        };
    }

    render() {
        let visibleText = null;
        if (this.state.showFull || this.props.text.length <= this.props.maxLength) {
            visibleText = this.props.text;
        } else {
            const firstHalf = this.props.text.substring(0, this.props.maxLength / 2);
            const secondHalf = this.props.text.substring(this.props.text.length - (this.props.maxLength / 2), this.props.text.length)
            visibleText = `${firstHalf}...${secondHalf}`;
        }
        const self = this;
        const clickHandler = () => {
            self.setState({showFull: !self.state.showFull});
        }
        return <span onClick={clickHandler} className={this.props.className}>{visibleText}</span>;
  }
}

ExpandText.propTypes = {
  text: React.PropTypes.string.isRequired,
  maxLength: React.PropTypes.number.isRequired,
  className: React.PropTypes.string
};

ExpandText.defaultProps = {
  className: ""
};

export default ExpandText;
