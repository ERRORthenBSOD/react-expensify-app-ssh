import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from "../actions/auth";

export const Header = ({startLogout})=>(
    <header className='header'>
        <div className="content-container">
            <div className='header__content'>
                <Link className='header__title' to="/dashboard" >
                    <h1>Список расходов</h1>
                    <div
                        className="fb-like"
                        data-share="true"
                        data-width="450"
                        data-show-faces="true">
                    </div>
                </Link>
                <button className='button button--link' onClick={startLogout}>Выход</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps =(dispatch)=>({
    startLogout: ()=>dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);




// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { startLogout } from '../actions/auth';
//
// export const Header = ({ startLogout }) => (
//     <header>
//         <h1>Expensify</h1>
//         <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
//         <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
//         <button onClick={startLogout}>Logout</button>
//     </header>
// );
//
// const mapDispatchToProps = (dispatch) => ({
//     startLogout: () => dispatch(startLogout())
// });
//
// export default connect(undefined, mapDispatchToProps)(Header);
