import { connect } from 'react-redux';
import MineDetail from './detail';

const mapStateToProps = (state) => {
    return {
        publicAddress: state.publicAddress,
        init_food:state.init_food,
        petData: state.petData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MineDetail)
