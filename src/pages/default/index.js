import { connect } from 'react-redux'
import PetList from './detail'
import { setPublicAddress,setpetData } from '../../store/rootReducer'

const mapStateToProps = (state) => {
    return {
        publicAddress: state.publicAddress,
        init_address: state.init_address,
        petData: state.petData,
        rankData:state.rankData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPublicAddress: (publicAddress) => dispatch(setPublicAddress(publicAddress)),
        setpetData:(petData)=>dispatch(setpetData(petData))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(PetList)



