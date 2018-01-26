import React from 'react';
import PropTypes from 'prop-types';

class FormattedMessage extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    componentClass: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ])
  };

  static defaultProps = {
    componentClass: 'span'
  };

  static contextTypes = {
    locale: PropTypes.object
  };

  getText() {
    const { id } = this.props;
    const { locale } = this.context;
    const text = locale[id];

    if (!text) {
      return id;
    }

    return text;
  }
  render() {
    const { componentClass: Component, id } = this.props;

    return (
      <Component>
        {this.getText() || id}
      </Component>
    );
  }
}

export default FormattedMessage;
