import { connect } from 'react-redux';
import { Paginate } from './component';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './redux';


export default connect(mapStateToProps, mapDispatchToProps)(Paginate);
