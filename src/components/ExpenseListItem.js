// import React from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import numeral from 'numeral';
//
// const ExpenseListItem = ({description, amount,createdAt, id})=> (
//         <div>
//             <Link to={`/edit/${id}`}>
//                 <h3>{description}</h3>
//             </Link>
//             <p>
//                 {numeral(amount/ 100).format('$0,0.00')}
//                 -
//                 {moment(createdAt).format('MMMM Do, YYYY')}</p>
//         </div>
// );
// // const ExpenseListItem = (props)=> (
// //     <div>
// //         <h2>This are the expense items</h2>
// //         <h3>{props.description}</h3>
// //         <h2>{props.amount} - {props.createdAt}</h2>
// //         <button onClick={()=>{
// //             props.dispatch(removeExpense({ id: props.id }));
// //         }}>Remove</button>
// //     </div>
// // );
//
// export default ExpenseListItem;

import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;

