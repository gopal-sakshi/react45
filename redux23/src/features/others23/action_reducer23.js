import { connect } from "react-redux";
import { action23 } from './actions';
import { getTodosByVisibilityFilter } from "./selectors";

const ActionReducer23 = ({ info23, action23 }) => {
    return (
        <>
            {/* { JSON.stringify(todos) } */}
            { info23 }
            <button onClick = {
                () => { 
                    console.log("action_reducer23");
                    action23('real_madrid23')
                    console.log("why_its_not_working");
                }}> 
                action_reducer23 
            </button>
        </>
    )
}

const mapStateToProps = state => { 
    console.log("state ====> ", state)
    // const { reducer23 } = state
    const reducer23 = state.reducer23
    return reducer23
}
export default connect(mapStateToProps, { action23 })(ActionReducer23);
