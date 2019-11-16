import { connect } from 'react-redux'
import { MyCombo } from '../../components/Combo/MyCombo/MyCombo'
const mapState = ({  }) => {
    console.log('re')
    return {
        a: 1
    }
}

const mapDispatch = {
    
}

export default connect(mapState, mapDispatch)(MyCombo)