import { connect } from 'react-redux';
import { Cell } from './component';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './redux';

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
