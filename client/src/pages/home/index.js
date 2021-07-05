import { connect } from 'react-redux';
import HomePage from './component';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './redux';


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

