import { connect } from 'react-redux';

import Tick from './Tick';

import {incrementTick} from '../../service/tickService'

const mapStateToProps = (state, ownProps) => ({

});
const mapDispatchToProps = {
    incrementTick
};

const TickContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tick);

TickContainer.displayName = 'TickContainer';

export default TickContainer;
