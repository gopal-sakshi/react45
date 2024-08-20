import { connect } from "react-redux";

const UnkoComponent2 =  ({counter44}) => {
    return (
        <>
            <h2> time from API call </h2>
            <h4> {counter44.time23} </h4>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("mapState ===> ", state)
    return {
        counter44: state.counter44
    }
}

export default connect(mapStateToProps)(UnkoComponent2)