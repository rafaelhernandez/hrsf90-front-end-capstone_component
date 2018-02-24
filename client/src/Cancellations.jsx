import React from 'react';

class Cancellations extends React.Component {
  constructor(props) {
    super(props);
  }

  cancellationExplanation(cancellationPolicy) {
    let explanation = '';
    if (cancellationPolicy === 'flexible') {
      explanation = 'Cancel up to 24 hours before check in and get a full refund (minus service fees). Cancel within 24 hours of your trip and the first night is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.';
    }
    return explanation;
  }

  render() {
    return (
      <div className="div-description-cancellations">
        <div className="div-description-cancellations-type">
          {this.props.cancellationPolicy.charAt(0).toUpperCase() + this.props.cancellationPolicy.slice(1)}
        </div>
        {this.cancellationExplanation(this.props.cancellationPolicy)}
      </div>
    );
  }
}


export default Cancellations;
